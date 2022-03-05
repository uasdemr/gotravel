import {createReducer} from '@reduxjs/toolkit';
import { appFetchReviews } from './actions';
// import { offers } from '../mocks/offers';
import {ReviewType} from '../types/review'
// import {reviews} from '../mocks/reviews'

type initialStateType = {
  reviews: ReviewType[];
}

const initialState: initialStateType = {
    reviews: [],
}

const reviewReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(appFetchReviews, (state, action) => {
        state.reviews = action.payload
      });
  });

  export default reviewReducer