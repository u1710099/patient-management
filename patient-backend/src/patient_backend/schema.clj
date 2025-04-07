(ns patient_backend.schema
  (:require [malli.core :as m]
            [malli.util :as mu]
            [java-time :as time]))

(def Patient
  [:map
   [:full-name [:string {:min 2}]]
   [:gender [:enum "male" "female" "other"]]
   [:birth-date :string] ; TODO: add date validation
   [:address [:string {:min 5}]]
   [:oms-number [:re #"^\d{16}$"]]])

(defn validate-patient [data]
  (m/validate Patient data))

(defn explain-patient [data]
  (m/explain Patient data))