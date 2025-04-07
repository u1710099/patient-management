(ns patient_backend.db
  (:require [next.jdbc :as jdbc]
            [mount.core :refer [defstate]]))

;; Define the PostgreSQL connection specs
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
          :stop nil)  ;; No need to explicitly close the datasource

;; Create the patient table if it doesn't already exist
(defn create-patient-table []
  (when-not (jdbc/execute! datasource ["SELECT to_regclass('patients')"])[0]
                                                                         (jdbc/execute! datasource
                                                                                        ["CREATE TABLE IF NOT EXISTS patients (
                      id SERIAL PRIMARY KEY,
                      full_name VARCHAR(255) NOT NULL,
                      gender VARCHAR(50) NOT NULL,
                      birth_date DATE NOT NULL,
                      address TEXT NOT NULL,
                      oms_number VARCHAR(255) NOT NULL
                   )"])))

;; Retrieve all patients
(defn get-all-patients []
  (jdbc/execute! datasource ["SELECT * FROM patients"]))

;; Retrieve a patient by their ID
(defn get-patient [id]
  (jdbc/execute-one! datasource ["SELECT * FROM patients WHERE id = ?" id]))

;; Insert a new patient into the database
(defn insert-patient [patient]
  (jdbc/execute-one! datasource
                     ["INSERT INTO patients (full_name, gender, birth_date, address, oms_number)
                       VALUES (?, ?, ?, ?, ?) RETURNING id"
                      (:full_name patient) (:gender patient) (:birth_date patient)
                      (:address patient) (:oms_number patient)]))

;; Update an existing patient
(defn update-patient [id patient]
  (jdbc/execute-one! datasource
                     ["UPDATE patients SET full_name = ?, gender = ?, birth_date = ?, address = ?, oms_number = ?
                       WHERE id = ? RETURNING *"
                      (:full_name patient) (:gender patient) (:birth_date patient)
                      (:address patient) (:oms_number patient) id]))

;; Delete a patient by their ID
(defn delete-patient [id]
  (jdbc/execute! datasource ["DELETE FROM patients WHERE id = ?" id]))
