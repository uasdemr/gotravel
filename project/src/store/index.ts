import { configureStore } from '@reduxjs/toolkit';
import offerReducer from './offer-reducer';
import reviewReducer from './review-reducer'
const reducer = {
    offers: offerReducer,
    reviews: reviewReducer
}

export const store = configureStore(
    {
        reducer
    }
);