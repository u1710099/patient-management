(ns patient_backend.db_test
  (:require [clojure.test :refer :all]
            [patient_backend.db :as db]))

(deftest patient-crud-test
  (let [new-patient {:full_name "Test Patient"
                     :gender "female"
                     :birth_date "1990-01-01"
                     :address "Test Address"
                     :oms_number "9876543210987654"}
        created (db/create-patient new-patient)
        id (:id created)]
    (is (= (:full_name created) "Test Patient"))
    (is (= (-> (db/get-patient id) :id) id))
    (db/delete-patient id)
    (is (nil? (db/get-patient id)))))
