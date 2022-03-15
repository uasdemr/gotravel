import {createReducer} from '@reduxjs/toolkit';
import { appLoadFavorites, setFavoriteFavoriteCardStatus } from './actions';
import { Offer } from '../types/offer';

type initialStateType = {
  favorites: Offer[];
}

const initialState: initialStateType = {
  favorites: [],
}

const favoritesReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(appLoadFavorites, (state, action) => {
        state.favorites = action.payload
      })
      .addCase(setFavoriteFavoriteCardStatus, (state, action) => {
        state.favorites = state.favorites.filter((item) => {
          if(item.id !== action.payload.id) {
            return item
          }
        })
      });
  });

  export default favoritesReducer
