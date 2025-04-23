(ns patient_backend.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.middleware.json :as json]
            [compojure.core :refer [defroutes POST GET PUT DELETE OPTIONS]]
            [ring.util.response :refer [response]]
            [ring.middleware.params :refer [wrap-params]]
            [clojure.tools.logging :as log]
            [mount.core :as mount]
            [patient-backend.db :as db]))

(defn create-patient-handler [request]
  (let [patient (:body request)]
    (log/info "🧾 Received parsed patient:" patient)
    (if (some? patient)  ;; Ensure patient is not nil
      (do
        (db/insert-patient patient)
        {:status 201
         :body {:message "Patient created"}})
      {:status 400
       :body {:message "Invalid patient data"}})))

(defn update-patient-handler [id request]
  (let [patient (:body request)]  ;; Get the patient data from the request body
    (log/info "Received update request for patient ID:" id "with body:" patient)  ;; Log for debugging
    (if id
      (do
        (db/update-patient id patient)  ;; Call the update function with ID and patient data
        {:status 200
         :body {:message "Patient updated successfully"}})
      {:status 400
       :body {:error "Missing patient ID"}})))



(defn get-all-patients-handler [_]
  (let [patients (db/get-all-patients)]
    {:status 200
     :body patients}))

(defn delete-patient-handler [id]
  (if id
    (do
      (db/delete-patient id)
      {:status 200
       :headers {"Content-Type" "application/json"}
       :body {:message "Patient deleted successfully"}})
    {:status 400
     :headers {"Content-Type" "application/json"}
     :body {:error "Missing patient ID"}}))


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

(defn options-handler [_]
  {:status 200
   :headers {"Access-Control-Allow-Origin" "*"
             "Access-Control-Allow-Methods" "GET, POST, PUT, DELETE, OPTIONS"
             "Access-Control-Allow-Headers" "Content-Type"}})


(defroutes routes
           (POST "/patients" request (create-patient-handler request))
           (PUT "/patients/:id" [id :as request] (update-patient-handler id request))
           (GET "/patients" [] (get-all-patients-handler nil))
           (DELETE "/patients/:id" [id] (delete-patient-handler id))
           (GET "/patients/search" request (search-patient-handler request))  ;; Search route
           (GET "/patients/filter" request (filter-patient-handler request))
           (GET "/favicon.ico" [] (favicon-handler nil))
           (OPTIONS "*" request (options-handler request))
           (GET "/" [] (root-handler nil)))

(def app
  (-> routes
      wrap-params
      (json/wrap-json-response)
      (json/wrap-json-body {:keywords? true})
      (wrap-cors :access-control-allow-origin [#".*"]
                 :access-control-allow-methods [:get :post :put :delete])))

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
