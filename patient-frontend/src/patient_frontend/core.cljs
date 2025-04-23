(ns patient-frontend.core
  (:require
    [cljs-http.client :as http]
    [cljs.core.async :refer [go <!]]
    [reagent.core :as reagent]
    [reagent.dom.client :as rdc]))

(def api-url "http://localhost:3000/patients")
(def success-status #{200 201})
(def form-fields
  [{:id :patients/full_name :label "Full Name" :type "text"}
   {:id :patients/gender :label "Gender" :type "text"}
   {:id :patients/birth_date :label "Birth Date" :type "date"}
   {:id :patients/address :label "Address" :type "text"}
   {:id :patients/oms_number :label "OMS Number" :type "text"}])

(defonce root (rdc/create-root (.getElementById js/document "app")))
(defonce patients (reagent/atom []))
(defonce current-patient (reagent/atom nil))
(defonce loading? (reagent/atom false))
(defonce error-msg (reagent/atom nil))
(defonce form-data (reagent/atom {}))

(defn handle-api-response [response success-fn error-message]
      (reset! loading? false)
      (if (success-status (:status response))
        (success-fn response)
        (reset! error-msg error-message)))

(defn fetch-patients []
      (reset! loading? true)
      (reset! error-msg nil)
      (go
        (let [response (<! (http/get api-url
                                     {:with-credentials? false
                                      :headers {"Accept" "application/json"}}))]
             (handle-api-response response
                                  #(reset! patients (:body %))
                                  "Failed to fetch patients"))))

(defn create-patient [patient-data]
      (go
        (let [response (<! (http/post api-url
                                      {:json-params patient-data
                                       :with-credentials? false
                                       :headers {"Content-Type" "application/json"
                                                 "Accept" "application/json"}}))]
             (handle-api-response response
                                  #(do
                                     (fetch-patients)
                                     (reset! current-patient nil)
                                     (reset! form-data {}))
                                  "Failed to create patient"))))

(defn update-patient [patient-id patient-data]
      (go
        (let [response (<! (http/put (str api-url "/" patient-id)
                                     {:json-params patient-data
                                      :with-credentials? false
                                      :headers {"Content-Type" "application/json"
                                                "Accept" "application/json"}}))]
             (handle-api-response response
                                  #(do
                                     (fetch-patients)
                                     (reset! current-patient nil)
                                     (reset! form-data {}))
                                  "Failed to update patient"))))

(defn delete-patient [patient-id]
      (go
        (let [response (<! (http/delete (str api-url "/" patient-id)
                                        {:with-credentials? false
                                         :headers {"Accept" "application/json"}}))]
             (handle-api-response response
                                  #(fetch-patients)
                                  "Failed to delete patient"))))


(defn patient-list []
      (let [patients-data @patients]
           [:div
            [:h2 "Patient List"]
            (cond
              @loading? [:p "Loading..."]
              @error-msg [:p {:style {:color "red"}} @error-msg]
              (empty? patients-data) [:p "No patients found."]
              :else
              [:ul
               (doall
                 (for [patient patients-data]
                      ^{:key (:patients/id patient)}
                      [:li
                       (:patients/full_name patient)
                       [:button {:on-click #(do
                                              (reset! current-patient patient)
                                              (reset! form-data patient))} "Edit"]
                       [:button {:on-click #(delete-patient (:patients/id patient))} "Delete"]]))])]))

(defn form-input [{:keys [id label type value on-change]}]
      [:div
       [:label (str label ": ")]
       [:input {:type type
                :value (or value "")
                :on-change on-change}]])

(defn patient-form []
      (let [patient @current-patient
            form-values @form-data]
           [:div
            [:h2 (if patient "Edit Patient" "Add Patient")]
            [:form
             {:on-submit
              (fn [e]
                  (.preventDefault e)
                  (if patient
                    (update-patient (:patients/id patient) form-values)
                    (create-patient form-values)))}
             [:div.form-fields
              (doall
                (for [{:keys [id label type]} form-fields]
                     ^{:key id}
                     [form-input
                      {:id id
                       :label label
                       :type type
                       :value (get form-values id "")
                       :on-change #(swap! form-data assoc id (.. % -target -value))}]))]
             [:button {:type "submit"} (if patient "Update" "Create")]]]))
(defn app []
      [:div
       [:h1 "Patient Management"]
       [patient-form]
       [patient-list]])

(defn init []
      (fetch-patients)
      (rdc/render root [app]))

(init)