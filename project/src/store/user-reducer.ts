import { createReducer } from '@reduxjs/toolkit';
import { setUser, unSetUser } from './actions';

import { UserInitialState } from '../types/user-login-response';

const initialState: UserInitialState = {
  user: {
    avatarUrl: '',
    email: '',
    id: null,
    isPro: false,
    name:  '',
    token:  '',

  },
  isDataLoaded: false,
  error: null,
};


const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUser, (state, action) => {
      state.user = action.payload
      state.isDataLoaded = true
    })
    .addCase(unSetUser, (state) =>  state = initialState);
    // .addCase(cityFilter, (state, action) => {
    //   state.city = action.payload
    // })
    // .addCase(citySortBy, (state, action) => {
    //   state.sorting = action.payload
    // })
    // .addCase(requireAuthorization, (state, action) => {
    //   state.authorizationStatus = action.payload
    // })
    // .addCase(setError, (state, action) => {
    //   state.error = action.payload;
    // });;
});

export default userReducer
