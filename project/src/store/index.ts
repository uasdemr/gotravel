import { configureStore } from '@reduxjs/toolkit';
import offerReducer from './offer-reducer';
import reviewReducer from './review-reducer'
import { createAPI } from '../services/api';
import { redirect } from './middlewares/redirect';
import userReducer from './user-reducer';
import favoritesReducer from './favorites-reducer';

export const api = createAPI();

const reducer = {
  offers: offerReducer,
  reviews: reviewReducer,
  profile: userReducer,
  favorites: favoritesReducer,
}

export const store = configureStore(
  {
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: api,
        },
        redirect
      })
  }
);
