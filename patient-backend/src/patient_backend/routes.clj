(ns patient_backend.routes
  (:require [reitit.ring :as ring]
            [patient_backend.db :as db]
            [ring.util.response :as response]))

(defn routes []
  (ring/router
    [["/api/patients"
      {:get (fn [_] (response/response (db/get-all-patients)))
       :post (fn [{:keys [body-params]}] (response/response (db/create-patient body-params)))}
      ["/:id"
       {:get (fn [{:keys [path-params]}] (response/response (db/get-patient (Integer/parseInt (:id path-params)))))
        :put (fn [{:keys [path-params body-params]}]
               (response/response (db/update-patient (Integer/parseInt (:id path-params)) body-params)))
        :delete (fn [{:keys [path-params]}]
                  (response/response {:deleted (db/delete-patient (Integer/parseInt (:id path-params)))}))}]]]))