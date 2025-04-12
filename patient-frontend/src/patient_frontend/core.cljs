(ns patient-frontend.core
  (:require
    [cljs-http.client :as http]
    [cljs.core.async :refer [go <!]]
    [reagent.core :as reagent]
    [reagent.dom :as dom]))

(def api-url "http://localhost:3000/patients")

;; Define state for patients, current patient, loading, and error messages
(defonce patients (reagent/atom []))
(defonce current-patient (reagent/atom nil))
(defonce loading? (reagent/atom false))
(defonce error-msg (reagent/atom nil))

;; Fetch the list of patients from the backend API
(defn fetch-patients []
      (reset! loading? true)
      (reset! error-msg nil)
      (http/get api-url
                {:with-credentials? false}
                (fn [response]
                    (reset! loading? false)
                    (if (= 200 (:status response))
                      (reset! patients (:body response))
                      (reset! error-msg "Failed to fetch patients")))))

;; Function to handle patient creation
(defn create-patient [patient-data]
      (http/post api-url
                 {:json-params patient-data}
                 (fn [response]
                     (if (= 201 (:status response))
                       (do
                         (fetch-patients)
                         (reset! current-patient nil))
                       (reset! error-msg "Failed to create patient")))))

;; Function to handle patient update
(defn update-patient [patient-id patient-data]
      (http/put (str api-url "/" patient-id)
                {:json-params patient-data}
                (fn [response]
                    (if (= 200 (:status response))
                      (do
                        (fetch-patients)
                        (reset! current-patient nil))
                      (reset! error-msg "Failed to update patient")))))

;; Function to handle patient deletion
(defn delete-patient [patient-id]
      (http/delete (str api-url "/" patient-id)
                   (fn [response]
                       (if (= 200 (:status response))
                         (fetch-patients)
                         (reset! error-msg "Failed to delete patient")))))

;; Display the list of patients
(defn patient-list []
      (let [patients-data @patients]
           [:div
            [:h2 "Patient List"]
            (if @loading?
              [:p "Loading..."]
              (if @error-msg
                [:p {:style {:color "red"}} @error-msg]
                (if (empty? patients-data)
                  [:p "No patients found."]
                  [:ul
                   (for [patient patients-data]
                        ^{:key (:patients/id patient)}
                        [:li
                         (:patients/full_name patient)
                         [:button {:on-click #(reset! current-patient patient)} "Edit"]
                         [:button {:on-click #(delete-patient (:patients/id patient))} "Delete"]])])))]))

;; Form for creating or editing a patient
(defn patient-form []
      (let [patient @current-patient
            name (reagent/atom (:patients/full_name patient))
            gender (reagent/atom (:patients/gender patient))
            birth_date (reagent/atom (:patients/birth_date patient))
            address (reagent/atom (:patients/address patient))
            oms_number (reagent/atom (:patients/oms_number patient))]
           (fn []
               [:div
                [:h2 (if patient "Edit Patient" "Add Patient")]
                [:form
                 {:on-submit (fn [e]
                                 (.preventDefault e)
                                 (let [patient-data {:patients/full_name @name
                                                     :patients/gender @gender
                                                     :patients/birth_date @birth_date
                                                     :patients/address @address
                                                     :patients/oms_number @oms_number}]
                                      (if patient
                                        (update-patient (:patients/id patient) patient-data)
                                        (create-patient patient-data))))}
                 [:div
                  [:label "Full Name: "]
                  [:input {:type "text" :value @name :on-change #(reset! name (-> % .-target .-value))}]]
                 [:div
                  [:label "Gender: "]
                  [:input {:type "text" :value @gender :on-change #(reset! gender (-> % .-target .-value))}]]
                 [:div
                  [:label "Birth Date: "]
                  [:input {:type "date" :value @birth_date :on-change #(reset! birth_date (-> % .-target .-value))}]]
                 [:div
                  [:label "Address: "]
                  [:input {:type "text" :value @address :on-change #(reset! address (-> % .-target .-value))}]]
                 [:div
                  [:label "OMS Number: "]
                  [:input {:type "text" :value @oms_number :on-change #(reset! oms_number (-> % .-target .-value))}]]
                 [:button {:type "submit"} (if patient "Update" "Create")]]])))

      ;; Main app that combines the patient list and form
      (defn app []
            [:div
             [:h1 "Patient Management"]
             [patient-form]
             [patient-list]])

      ;; Initialize the app by fetching patients and rendering it to the DOM
(defn init []
      (fetch-patients)
      (rdom/render [app] (.getElementById js/document "app")))

(init)


