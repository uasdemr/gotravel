import {createReducer} from '@reduxjs/toolkit';
import { appStart, cityFilter, appFetchOffers, citySortBy } from './actions';
// import { offers } from '../mocks/offers';
import {Offer} from '../types/offer'

type initialStateType = {
    city: string;
    offers: Offer[];
    sorting: string;
}

const initialState: initialStateType = {
    city: 'Amsterdam',
    offers: [],
    sorting: 'Popular',
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
      })
      .addCase(citySortBy, (state, action) => {
        state.sorting = action.payload
      });
  });

  export default offerReducer