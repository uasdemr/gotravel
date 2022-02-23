import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";

const PLACES_TO_STAY_QUANTITY = 5;

ReactDOM.render(
  <React.StrictMode>
    <App placesToStayQuantity={PLACES_TO_STAY_QUANTITY} />
  </React.StrictMode>,
  document.getElementById("root")
);
