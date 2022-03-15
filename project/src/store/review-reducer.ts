import {createReducer} from '@reduxjs/toolkit';
import { appFetchReviews, postComment } from './actions';
import {ReviewType} from '../types/review'

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
      // .addCase(postComment, (state, action) => {
      //   state.reviews = [...action.payload]
      // });
  });

  export default reviewReducer
