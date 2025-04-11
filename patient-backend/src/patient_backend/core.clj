(ns patient_backend.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.middleware.json :as json]
            [compojure.core :refer [defroutes POST GET PUT]]
            [ring.util.response :refer [response]]
            [clojure.tools.logging :as log]
            [mount.core :as mount]
            [patient_backend.db :as db]))

(defn create-patient-handler [request]
  (let [patient (:body request)]
    (log/info "🧾 Received parsed patient:" patient)
    (if patient
      (do
        (db/insert-patient patient)
        {:status 201
         :body {:message "Patient created"}})
      {:status 400
       :body {:message "Invalid patient data"}})))

(defn update-patient-handler [request]
  (let [patient (:body request)
        id (:id patient)]
    (if (and id patient)
      (do
        (db/update-patient id patient)
        {:status 200
         :body {:message "Patient updated"}})
      {:status 400
       :body {:message "Missing or invalid patient data"}})))

(defn get-all-patients-handler [_]
  (let [patients (db/get-all-patients)]
    {:status 200
     :body patients}))

(defn favicon-handler [_]
  (response ""))

(defn root-handler [_]
  {:status 200
   :body {:message "Welcome to the Patient Backend"}})

(defroutes routes
           (POST "/patients" request (create-patient-handler request))
           (PUT "/patients" request (update-patient-handler request))
           (GET "/patients" [] (get-all-patients-handler nil))
           (GET "/favicon.ico" [] (favicon-handler nil))
           (GET "/" [] (root-handler nil)))

(def app
  (-> routes
      (json/wrap-json-response)
      (json/wrap-json-body {:keywords? true})))

(defn start-server []
  (jetty/run-jetty app {:port 3000 :join? false}))

(defn -main []
  (println "Starting patient backend server...")
  (mount/start) ;; this will initialize the `ds` datasource
  (try
    (db/create-patient-table)
    (catch Exception e
      (println "Error creating patient table:" (.getMessage e))
      (System/exit 1)))
  (start-server))
