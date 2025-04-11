(ns patient_backend.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.middleware.json :as json]
            [compojure.core :refer [defroutes POST GET PUT DELETE]]
            [ring.util.response :refer [response]]
            [ring.middleware.params :refer [wrap-params]]
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

(defn delete-patient-handler [request]
  (let [request-body (:body request)          ;; Extract the full body from the request
        id (:id request-body)]                  ;; Extract 'id' from the body
    (log/info "Received delete request with body:" request-body)  ;; Log the body for debugging
    (if id
      (do
        (db/delete-patient id)
        {:status 200
         :body {:message "Patient deleted"}})
      {:status 400
       :body {:message "Missing patient ID"}})))

(defn search-patient-handler [request]
  (let [search-term (get-in request [:query-params "search"])] ;; << here!
    (if (and search-term (not (clojure.string/blank? search-term)))
      (let [patients (db/search-patient search-term)]
        (if (seq patients)
          {:status 200 :body patients}
          {:status 404 :body {:message "No patients found"}}))
      {:status 400 :body {:message "Search term is required"}})))

(defn filter-patient-handler [request]
  (try
    (let [{:strs [full_name gender birth_date address oms_number]} (:query-params request)]
      (if (or full_name gender birth_date address oms_number)
        (let [filters {:full_name full_name
                       :gender gender
                       :birth_date birth_date
                       :address address
                       :oms_number oms_number}
              patients (db/filter-patient filters)]
          (if (and patients (seq patients))
            {:status 200 :body patients}
            {:status 404 :body {:message "No patients found with given filters"}}))
        {:status 400 :body {:message "At least one filter parameter is required"}}))
    (catch Exception e
      (do
        (log/error e "Failed to filter patients")
        {:status 500 :body {:message "Internal server error"}}))))


(defn favicon-handler [_]
  (response ""))

(defn root-handler [_]
  {:status 200
   :body {:message "Welcome to the Patient Backend"}})

(defroutes routes
           (POST "/patients" request (create-patient-handler request))
           (PUT "/patients" request (update-patient-handler request))
           (GET "/patients" [] (get-all-patients-handler nil))
           (DELETE "/patients" request (delete-patient-handler request))
           (GET "/patients/search" request (search-patient-handler request))  ;; Search route
           (GET "/patients/filter" request (filter-patient-handler request))
           (GET "/favicon.ico" [] (favicon-handler nil))
           (GET "/" [] (root-handler nil)))

(def app
  (-> routes
      wrap-params
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
