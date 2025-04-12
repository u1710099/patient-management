(ns patient-frontend.core
  (:require [reagent.core :as r]
            [cljs-http.client :as http]
            [ajax.core :refer [GET POST PUT DELETE]]))

;; Global atom to store patient data
(defonce app-state (r/atom {:patients []}))

;; Function to fetch all patients
(defn fetch-all-patients []
      (GET "http://localhost:3000/patients"
           {:handler (fn [response]
                         (reset! app-state {:patients (:body response)}))  ;; Update state with patients
            :error-handler (fn [error]
                               (js/console.error "Error fetching patients: " error))}))

;; Function to create a new patient
(defn create-patient [patient]
      (POST "http://localhost:3000/patients"
            {:params patient
             :handler (fn [response]
                          (js/console.log "Patient created: " response))  ;; Handle successful creation
             :error-handler (fn [error]
                                (js/console.error "Error creating patient: " error))}))

;; Function to update an existing patient
(defn update-patient [patient]
      (PUT "http://localhost:3000/patients"
           {:params patient
            :handler (fn [response]
                         (js/console.log "Patient updated: " response))}))

;; Function to delete a patient
(defn delete-patient [id]
      (DELETE "http://localhost:3000/patients"
              {:params {:id id}
               :handler (fn [response]
                            (js/console.log "Patient deleted: " response))}))

;; Reagent component to display patients
(defn patient-list []
      [:div
       [:h2 "Patient List"]
       [:button {:on-click #(fetch-all-patients)} "Fetch All Patients"]
       (for [patient (:patients @app-state)]
            ^{:key (:id patient)}
            [:div {:style {:border "1px solid #ccc" :padding "10px" :margin-bottom "10px"}}
             [:p (:full_name patient)]
             [:button {:on-click #(delete-patient (:id patient))} "Delete"]])])

;; Root component
(defn app []
      [:div
       [:h1 "Patient Management"]
       [patient-list]])

;; Render the app to the HTML element with id "app"
(reagent.dom/render [app] (.getElementById js/document "app"))
