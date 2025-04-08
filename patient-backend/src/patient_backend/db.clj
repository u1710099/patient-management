(ns patient_backend.db
  (:require [next.jdbc :as jdbc]
            [mount.core :refer [defstate]]))

;; Define the datasource state using mount
(defstate datasource
          :start (jdbc/get-datasource {:dbtype "postgresql"
                                       :host "localhost"
                                       :port 5432
                                       :dbname "patient"
                                       :user "postgres"
                                       :password "admin"})
          :stop (fn [] (println "Datasource stop is handled by mount, no need for close!")))

;; Create patient table function
(defn create-patient-table []
  (let [sql "CREATE TABLE IF NOT EXISTS patients (id SERIAL PRIMARY KEY, full_name VARCHAR, gender VARCHAR, birth_date DATE, address TEXT, oms_number VARCHAR)"]
    (try
      ;; Correct usage of execute! with datasource dereference
      (jdbc/execute! @datasource [sql])
      (println "Patient table created or already exists.")
      (catch Exception e
        (println "Error creating patient table:" (.getMessage e))))))

;; Insert patient function
(defn insert-patient [patient]
  (let [sql "INSERT INTO patients (full_name, gender, birth_date, address, oms_number)
             VALUES (?, ?, ?, ?, ?) RETURNING id"
        params [(get patient :full_name)
                (get patient :gender)
                (get patient :birth_date)
                (get patient :address)
                (get patient :oms_number)]]
    (try
      ;; Correct usage of execute! with datasource dereference
      (let [result (jdbc/execute! @datasource [sql params])]
        (if (seq result)
          (get (first result) :id)  ;; Return the ID if insertion is successful
          (throw (ex-info "Failed to insert patient" {}))))
      (catch Exception e
        (println "Error inserting patient:" (.getMessage e))
        nil)))) ;; Return nil or appropriate error value in case of failure
