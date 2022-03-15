import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import App from "./components/app/App";
import ErrorMessage from "./components/error-message/ErrorMessage";

import {store} from './store';
import { checkAuthAction, fetchOffersAction } from "./store/api-actions";

const PLACES_TO_STAY_QUANTITY = 5;

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App placesToStayQuantity={PLACES_TO_STAY_QUANTITY} />

    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
