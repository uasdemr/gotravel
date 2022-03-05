import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {appFetchOffers, appFetchReviews} from './store/actions'

import App from "./components/app/App";

import {offers} from './mocks/offers'
import { reviews } from "./mocks/reviews";
import {store} from './store';

const PLACES_TO_STAY_QUANTITY = 5;

store.dispatch(appFetchOffers(offers))
store.dispatch(appFetchReviews(reviews))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App placesToStayQuantity={PLACES_TO_STAY_QUANTITY} />

    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
