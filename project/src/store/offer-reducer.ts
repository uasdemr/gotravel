import {createReducer} from '@reduxjs/toolkit';
import { appStart, cityFilter, appFetchOffers } from './actions';
// import { offers } from '../mocks/offers';
import {Offer} from '../types/offer'

type initialStateType = {
    city: string;
    offers: Offer[];
}

const initialState: initialStateType = {
    city: 'Amsterdam',
    offers: [],
}

const offerReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(appStart, (state) => {
        state = initialState
      })
      .addCase(appFetchOffers, (state, action) => {
          state.offers = action.payload
      })
      .addCase(cityFilter, (state, action) => {
        state.city = action.payload
      });
  });

  export default offerReducer