(ns patient_backend.core
  (:gen-class)
  (:require [ring.adapter.jetty :as jetty]
            [patient_backend.db :as db]
            [ring.util.response :as response]
            [cheshire.core :as json]
            [ring.middleware.json :as ring-json]  ;; Correct import for JSON middleware
            [mount.core :as mount]))  ;; Correctly include mount for state management

;; Your handler for patient creation
(defn create-patient-handler [request]
  (let [patient (json/decode (slurp (:body request)) true)]  ;; Decode JSON into a Clojure map
    (if (and (:full_name patient) (:gender patient) (:birth_date patient) (:address patient) (:oms_number patient))
      (do
        (db/insert-patient patient)  ;; Insert patient into database
        (response/created "/patients"))  ;; Return 201 Created with URI
      (response/bad-request "Invalid patient data"))))  ;; Return 400 Bad Request

;; Define your routes, include POST for patient creation
(def routes
  (fn [request]
    (case (:uri request)
      "/patients" (case (:request-method request)
                    :post (create-patient-handler request)
                    (response/not-found "Route not found"))
      (response/not-found "Route not found"))))

;; Main function to start the server and initialize resources
(defn -main [& args]
  (mount/start)  ;; Start mount to initialize all states
  (db/create-patient-table) ;; Ensure table creation on app start
  (jetty/run-jetty (ring-json/wrap-json-response
                     (ring-json/wrap-json-body routes))  ;; Use the correct middleware
                   {:port 3000}))  ;; Run the server on port 3000
