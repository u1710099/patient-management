(ns patient_backend.core_test
  (:require [clojure.test :refer :all]
            [ring.mock.request :as mock]))

(deftest ring-mock-test
  (testing "Can create a mock request"
    (is (= {:server-port 80
            :server-name "localhost"
            :remote-addr "localhost"
            :uri "/"
            :scheme :http
            :request-method :get}
           (select-keys (mock/request :get "/")
                        [:server-port :server-name :remote-addr :uri :scheme :request-method])))))

;; Helper functions
(defn parse-body [response]
  (-> response
      :body
      (json/parse-string true)))

(defn json-request
  ([method uri]
   (-> (mock/request method uri)
       (mock/content-type "application/json")))
  ([method uri body]
   (-> (json-request method uri)
       (mock/body (json/generate-string body)))))

;; Test data
(def test-patient
  {:full_name "John Doe"
   :gender "male"
   :birth_date "1990-01-01"
   :address "123 Test St"
   :oms_number "1234567890"})

;; Tests
(deftest test-root-endpoint
  (testing "Root endpoint returns welcome message"
    (let [response (app (mock/request :get "/"))
          body (parse-body response)]
      (is (= 200 (:status response)))
      (is (= "Welcome to the Patient Backend" (:message body))))))

(deftest test-create-patient
  (testing "Create patient with valid data"
    (let [response (app (json-request :post "/patients" test-patient))
          body (parse-body response)]
      (is (= 201 (:status response)))
      (is (= "Patient created" (:message body)))))

  (testing "Create patient with invalid data"
    (let [response (app (json-request :post "/patients" nil))
          body (parse-body response)]
      (is (= 400 (:status response)))
      (is (= "Invalid patient data" (:message body))))))

(deftest test-update-patient
  (testing "Update patient with valid data"
    (let [response (app (json-request :put "/patients/1"
                                      (assoc test-patient :full_name "Jane Doe")))
          body (parse-body response)]
      (is (= 200 (:status response)))
      (is (= "Patient updated successfully" (:message body)))))

  (testing "Update patient with invalid id"
    (let [response (app (json-request :put "/patients/" test-patient))
          body (parse-body response)]
      (is (= 404 (:status response))))))

(deftest test-get-all-patients
  (testing "Get all patients"
    (let [response (app (mock/request :get "/patients"))
          body (parse-body response)]
      (is (= 200 (:status response)))
      (is (vector? body)))))

(deftest test-delete-patient
  (testing "Delete existing patient"
    (let [response (app (mock/request :delete "/patients/1"))
          body (parse-body response)]
      (is (= 200 (:status response)))
      (is (= "Patient deleted successfully" (:message body)))))

  (testing "Delete with missing ID"
    (let [response (app (mock/request :delete "/patients/"))
          body (parse-body response)]
      (is (= 404 (:status response))))))

(deftest test-search-patient
  (testing "Search with valid term"
    (let [response (app (mock/request :get "/patients/search?search=John"))
          body (parse-body response)]
      (is (contains? #{200 404} (:status response)))))

  (testing "Search with empty term"
    (let [response (app (mock/request :get "/patients/search"))
          body (parse-body response)]
      (is (= 400 (:status response)))
      (is (= "Search term is required" (:message body))))))

(deftest test-filter-patient
  (testing "Filter with valid parameters"
    (let [response (app (mock/request :get "/patients/filter?gender=male"))
          body (parse-body response)]
      (is (contains? #{200 404} (:status response)))))

  (testing "Filter with no parameters"
    (let [response (app (mock/request :get "/patients/filter"))
          body (parse-body response)]
      (is (= 400 (:status response)))
      (is (= "At least one filter parameter is required" (:message body))))))

(deftest test-options-request
  (testing "OPTIONS request returns correct CORS headers"
    (let [response (app (mock/request :options "*"))]
      (is (= 200 (:status response)))
      (is (= "*" (get-in response [:headers "Access-Control-Allow-Origin"])))
      (is (get-in response [:headers "Access-Control-Allow-Methods"]))
      (is (get-in response [:headers "Access-Control-Allow-Headers"])))))

(deftest test-favicon
  (testing "Favicon request returns empty response"
    (let [response (app (mock/request :get "/favicon.ico"))]
      (is (= 200 (:status response)))
      (is (empty? (:body response))))))

;; Integration test example
(deftest test-patient-workflow
  (testing "Complete patient workflow"
    (let [;; Create patient
          create-response (app (json-request :post "/patients" test-patient))
          _ (is (= 201 (:status create-response)))

          ;; Get all patients
          list-response (app (mock/request :get "/patients"))
          _ (is (= 200 (:status list-response)))
          patients (parse-body list-response)
          _ (is (not-empty patients))

          ;; Update patient
          updated-patient (assoc test-patient :full_name "Jane Doe")
          update-response (app (json-request :put "/patients/1" updated-patient))
          _ (is (= 200 (:status update-response)))

          ;; Search patient
          search-response (app (mock/request :get "/patients/search?search=Jane"))
          _ (is (= 200 (:status search-response)))

          ;; Delete patient
          delete-response (app (mock/request :delete "/patients/1"))
          _ (is (= 200 (:status delete-response)))])))