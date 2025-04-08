(ns patient_backend.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.middleware.json :as json]
            [patient_backend.db :as db]
            [compojure.core :refer [defroutes POST GET]]
            [ring.util.response :refer [response]]
            [clojure.tools.logging :as log]
            [mount.core :as mount]))

;; Start all the mount states before starting the server
(mount/start)

;; Your handler function for creating a patient
(defn create-patient-handler [request]
  (log/info "Received request to create a patient" request) ;; Log the request
  (let [patient (get-in request [:json-params])] ;; Use :json-params to access the parsed JSON body
    (if patient
      (let [id (db/insert-patient patient)]  ;; Assuming `insert-patient` is a function to insert the patient into DB
        {:status 201
         :body {:message "Patient created"
                :id id}})
      {:status 400
       :body {:message "Invalid patient data"}})))

;; Your handler function for favicon.ico
(defn favicon-handler [request]
  (log/info "Received request for favicon.ico")
  (response ""))  ;; Respond with an empty response for the favicon request

;; Your handler function for root ("/") route
(defn root-handler [request]
  (log/info "Received request for root route")
  {:status 200
   :body {:message "Welcome to the Patient Backend"}})  ;; Respond with a message

;; Set up the routes
(defroutes routes
           (POST "/patients" request (create-patient-handler request))
           (GET "/favicon.ico" [] (favicon-handler nil))  ;; Add favicon handler route
           (GET "/" [] (root-handler nil)))  ;; Handle the root ("/") route

(def app
  (-> routes
      (json/wrap-json-body {:keywords? true})
      (json/wrap-json-params)
      (json/wrap-json-response)))

;; Start the server
(defn start-server []
  (jetty/run-jetty app {:port 3000 :join? false}))

(defn -main []
  (println "Starting patient backend server...")
  (db/create-patient-table)  ;; Ensure table creation before starting the server
  (start-server))  ;; Start the server after table creation
