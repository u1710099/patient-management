(ns patient_backend.routes
  (:require [reitit.ring :as ring]
            [patient_backend.db :as db]
            [ring.util.response :as response]
            [clojure.string :as str]))

(defn validate-patient [patient]
  (cond
    (not (:full_name patient)) {:status 400 :body "Full name is required"}
    (not (:gender patient)) {:status 400 :body "Gender is required"}
    (not (:birth_date patient)) {:status 400 :body "Birth date is required"}
    (not (:address patient)) {:status 400 :body "Address is required"}
    (not (:oms_number patient)) {:status 400 :body "OMS number is required"}
    :else nil))

(defn routes []
  (ring/router
    [["/api/patients"
      {:get (fn [_] (response/response (db/get-all-patients)))}

      ;; POST /api/patients - Create a new patient
      :post (fn [{:keys [body-params]}]
              (let [validation-error (validate-patient body-params)]
                (if validation-error
                  validation-error
                  (let [patient-id (db/insert-patient body-params)]
                    (response/created (str "/api/patients/" patient-id))

["/:id"
 ;; GET /api/patients/:id - Retrieve a patient by ID
 {:get (fn [{:keys [path-params]}]
         (let [patient (db/get-patient (Integer/parseInt (:id path-params)))]
           (if patient
             (response/response patient)
             (response/status 404 {:message "Patient not found"}))))}

 ;; PUT /api/patients/:id - Update an existing patient
 :put (fn [{:keys [path-params body-params]}]
        (let [patient (db/update-patient (Integer/parseInt (:id path-params)) body-params)]
          (if patient
            (response/response patient)
            (response/status 404 {:message "Patient not found"}))))

;; DELETE /api/patients/:id - Delete a patient by ID
:delete (fn [{:keys [path-params]}]
          (let [deleted (db/delete-patient (Integer/parseInt (:id path-params)))]
            (if deleted
              (response/status 200 {:message "Patient deleted"})
              (response/status 404 {:message "Patient not found"}))))]))))]]))

