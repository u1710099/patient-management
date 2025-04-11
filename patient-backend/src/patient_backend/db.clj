(ns patient_backend.db
  (:require [next.jdbc :as jdbc]
            [mount.core :refer [defstate]])
  (:import [java.sql Date]))
(def db-spec
  {:dbtype   "postgresql"
   :host     "localhost"
   :port     5432
   :dbname   "patients"
   :user     "postgres"
   :password "admin"})

(defstate ds
          :start (jdbc/get-datasource db-spec)
          :stop nil)

;; Create the patient table
(defn create-patient-table []
  (jdbc/execute! ds ["CREATE TABLE IF NOT EXISTS patients (
                        id SERIAL PRIMARY KEY,
                        full_name VARCHAR,
                        gender VARCHAR,
                        birth_date DATE,
                        address TEXT,
                        oms_number VARCHAR)"]))

;; Insert patient
(defn insert-patient [patient]
  (let [birth-date (Date/valueOf (:birth_date patient))] ; cast string to SQL date
    (jdbc/execute! ds
                   ["INSERT INTO patients (full_name, gender, birth_date, address, oms_number)
                     VALUES (?, ?, ?, ?, ?)"
                    (:full_name patient)
                    (:gender patient)
                    birth-date
                    (:address patient)
                    (:oms_number patient)])))

(defn get-all-patients []
  (jdbc/execute! ds ["SELECT * FROM patients"]))
