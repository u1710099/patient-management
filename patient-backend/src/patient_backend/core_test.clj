(ns patient_backend.core_test
  (:require [clojure.test :refer :all]
            [ring.mock.request :as mock]
            [cheshire.core :as json]
            [patient_backend.core :refer [app]]))
(deftest test-simple-app
  (let [response (app (mock/request :get "/test"))]  ;; Use app for the test
    (is (not (nil? response)))))
(defn parse-response [res]
  (update res :body #(if % (some-> % slurp (json/parse-string true)) nil)))

(deftest test-create-patient-endpoint
  (let [patient {:full_name "API Test"
                 :gender "female"
                 :birth_date "2000-01-01"
                 :address "API address"
                 :oms_number "223344"}
        request (-> (mock/request :post "/patients")
                    (mock/json-body patient))
        response (parse-response (app request))]
    (is (= 201 (:status response)))
    (is (= "Patient created" (get-in response [:body :message])))))

(deftest test-get-all-patients-endpoint
  (let [response (parse-response (app (mock/request :get "/patients")))]
    (is (= 200 (:status response)))
    (is (vector? (:body response)))))

(deftest test-invalid-create-patient
  (let [response (parse-response (app (-> (mock/request :post "/patients")
                                          (mock/json-body nil))))]  ;; Pass nil as body
    (is (= 400 (:status response)))
    (is (= "Invalid patient data" (get-in response [:body :message])))))

(deftest test-search-endpoint
  (let [response (parse-response (app (mock/request :get "/patients/search?search=API")))]
    (is (contains? #{200 404} (:status response)))))

(deftest test-filter-endpoint
  (let [response (parse-response (app (mock/request :get "/patients/filter?gender=female")))]
    (is (contains? #{200 404} (:status response)))))
