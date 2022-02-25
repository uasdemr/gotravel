import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";

import {offers} from './mocks/offers'
import { reviews } from "./mocks/reviews";

const PLACES_TO_STAY_QUANTITY = 5;

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers} reviews={reviews} placesToStayQuantity={PLACES_TO_STAY_QUANTITY} />
  </React.StrictMode>,
  document.getElementById("root")
);
