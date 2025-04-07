(ns patient_backend.db
  (:require [next.jdbc :as jdbc]
            [mount.core :refer [defstate]]))

(def db-spec
  {:dbtype "postgresql"
   :host "localhost"
   :port 5432
   :dbname "patients"
   :user "postgres"
   :password "admin"})

;; Use mount to manage the datasource lifecycle
(defstate datasource
          :start (jdbc/get-datasource db-spec)
          :stop nil)  ;; No need to explicitly close, mount handles stopping

;; The rest of the functions remain the same

(defn get-all-patients []
  (jdbc/execute! datasource ["SELECT * FROM patients"]))

(defn get-patient [id]
  (jdbc/execute-one! datasource ["SELECT * FROM patients WHERE id = ?" id]))

(defn insert-patient [patient]
  (jdbc/execute-one! datasource
                     ["INSERT INTO patients (full_name, gender, birth_date, address, oms_number)
                       VALUES (?, ?, ?, ?, ?) RETURNING id"
                      (:full_name patient) (:gender patient) (:birth_date patient)
                      (:address patient) (:oms_number patient)]))

(defn update-patient [id patient]
  (jdbc/execute-one! datasource
                     ["UPDATE patients SET full_name = ?, gender = ?, birth_date = ?, address = ?, oms_number = ?
                       WHERE id = ? RETURNING *"
                      (:full_name patient) (:gender patient) (:birth_date patient)
                      (:address patient) (:oms_number patient) id]))

(defn delete-patient [id]
  (jdbc/execute! datasource ["DELETE FROM patients WHERE id = ?" id]))

(defn create-patient-table []
  (jdbc/execute! datasource
                 ["CREATE TABLE IF NOT EXISTS patients (
                    id SERIAL PRIMARY KEY,
                    full_name VARCHAR(255) NOT NULL,
                    gender VARCHAR(50) NOT NULL,
                    birth_date DATE NOT NULL,
                    address TEXT NOT NULL,
                    oms_number VARCHAR(255) NOT NULL
                 )"]))
