(ns patient_backend.db_test
  (:require [clojure.test :refer :all]
            [patient_backend.db :as db]
            [next.jdbc :as jdbc]))

(deftest test-insert-and-get-patient
  (let [patient {:full_name "Alice Doe"
                 :gender "female"
                 :birth_date "1992-02-29"
                 :address "123 Space Street"
                 :oms_number "99887766"}]
    (db/create-patient-table)
    (db/insert-patient patient)
    (let [results (db/get-all-patients)]
      (is (some #(= "Alice Doe" (:patients/full_name %)) results)))))

(deftest test-update-patient
  (let [initial {:full_name "Update Test"
                 :gender "male"
                 :birth_date "1990-01-01"
                 :address "Test address"
                 :oms_number "00001111"}]
    (db/create-patient-table)
    (db/insert-patient initial)
    (let [id (:patients/id (first (db/get-all-patients)))]
      (db/update-patient id (assoc initial :full_name "Updated Name"))
      (let [updated (first (db/get-all-patients))]
        (is (= "Updated Name" (:patients/full_name updated)))))))

(deftest test-delete-patient
  (let [patient {:full_name "Delete Me"
                 :gender "non-binary"
                 :birth_date "1980-10-10"
                 :address "Nowhere"
                 :oms_number "1234"}]
    (db/create-patient-table)
    (db/insert-patient patient)
    (let [id (:patients/id (first (db/get-all-patients)))]
      (db/delete-patient id)
      (is (empty? (db/get-all-patients))))))
