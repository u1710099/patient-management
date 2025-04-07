(ns patient_backend.server
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [reitit.ring :as ring]
            [patient_backend.routes :refer [routes]]))

(defonce server (atom nil))

(defn start-server []
  (reset! server (run-jetty (ring/ring-handler (routes)) {:port 3000 :join? false})))

(defn stop-server []
  (when @server
    (.stop @server)))