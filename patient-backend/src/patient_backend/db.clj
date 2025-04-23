(ns patient-backend.db
  (:require [mount.core :refer [defstate]]
            [next.jdbc :as jdbc]
            [taoensso.timbre :as log])
  (:import [java.time ZonedDateTime LocalDate]
           [java.sql Date]))

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
(defn update-patient [id patient]
  (let [birth-date (Date/valueOf (:birth_date patient))] ; <- simplified like insert-patient
    (jdbc/execute! ds
                   ["UPDATE patients SET full_name = ?, gender = ?, birth_date = ?, address = ?, oms_number = ? WHERE id = ?"
                    (:full_name patient)
                    (:gender patient)
                    birth-date
                    (:address patient)
                    (:oms_number patient)
                    (Integer/parseInt id)])))


(defn get-all-patients []
  (jdbc/execute! ds ["SELECT * FROM patients"]))
(defn delete-patient [id]
  (jdbc/execute! ds ["DELETE FROM patients WHERE id = ?" (Integer/parseInt id)]))


;; Function to search patients by a term (name, gender, or OMS number)
(defn search-patient [search-term]
  (jdbc/execute!
    ds
    ["SELECT * FROM patients
     WHERE full_name ILIKE ?
        OR gender ILIKE ?
        OR address ILIKE ?
        OR oms_number ILIKE ?
        OR TO_CHAR(birth_date, 'YYYY-MM-DD') ILIKE ?"
     (str "%" search-term "%")
     (str "%" search-term "%")
     (str "%" search-term "%")
     (str "%" search-term "%")
     (str "%" search-term "%")]))


(defn filter-patient [{:keys [full_name gender birth_date address oms_number]}]
  (let [base "SELECT * FROM patients WHERE 1=1"
        [query params]
        (reduce
          (fn [[q p] [field val]]
            (if val
              (case field
                :full_name [(str q " AND full_name ILIKE ?") (conj p (str "%" val "%"))]
                :gender [(str q " AND gender ILIKE ?") (conj p (str "%" val "%"))]
                :birth_date [(str q " AND TO_CHAR(birth_date, 'YYYY-MM-DD') = ?") (conj p val)]
                :address [(str q " AND address ILIKE ?") (conj p (str "%" val "%"))]
                :oms_number [(str q " AND oms_number ILIKE ?") (conj p (str "%" val "%"))]
                [q p])
              [q p]))
          [base []]
          {:full_name full_name
           :gender gender
           :birth_date birth_date
           :address address
           :oms_number oms_number})]
    (log/info "🔍 Executing filter query:" query "with params:" params)
    (jdbc/execute! ds (into [query] params))))




