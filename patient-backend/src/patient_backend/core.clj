(ns patient_backend.core
  (:gen-class)
  (:require [ring.adapter.jetty :as jetty]
            [patient_backend.db :as db]
            [ring.util.response :as response]
            [cheshire.core :as json]
            [ring.middleware.json :as ring-json]  ;; Correct import for JSON middleware
            [mount.core :as mount]))  ;; Correctly include mount for state management

(defn create-patient-handler [request]
  (let [patient (json/decode (slurp (:body request)) true)]
    (if (and (:full_name patient) (:gender patient) (:birth_date patient) (:address patient) (:oms_number patient))
      (do
        (db/insert-patient patient)
        (response/created "/patients"))  ;; Returning URI
      (response/bad-request "Invalid patient data"))))

(def routes
  [["/patients" {:post create-patient-handler}]])

(defn -main [& args]
  (mount/start)  ;; Start mount to initialize all states
  (db/create-patient-table) ;; Ensure table creation on app start
  (jetty/run-jetty (ring-json/wrap-json-response
                     (ring-json/wrap-json-body routes))  ;; Use the correct middleware
                   {:port 3000}))
