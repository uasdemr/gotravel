import { createReducer } from '@reduxjs/toolkit';
import { appStart, cityFilter, appLoadOffers, citySortBy, requireAuthorization, setError, getOfferById, getCommentsById, getNearbyHotelsById, setFavoriteStatus, postComment } from './actions';
import { Offer } from '../types/offer'
import { AuthorizationStatus } from '../const';
import { Comment } from '../types/review';

type initialStateType = {
  city: string;
  offers: Offer[];
  sorting: string;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  error: string;
  offerById: Offer;
  commentsByHotelId: Comment[];
  nearbyHotelsById: Offer[];
}

type defaultOfferType = {
  bedrooms: number;
  city: {
    location: {
      latitude: number,
      longitude: number,
      zoom: number,
    },
    name: string,
  },
  description: string,
  goods: string[],
  host: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string,
  },
  id: number,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
}

const defaultOffer: defaultOfferType = {
  bedrooms: 0,
  city: {
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 1,
    },
    name: "",
  },
  description: "",
  goods: [],
  host: {
    avatarUrl: "",
    id: 0,
    isPro: true,
    name: "",
  },
  id: 1,
  images: [],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0,
  },
  maxAdults: 0,
  previewImage: "",
  price: 0,
  rating: 0,
  title: "",
  type: "",
}


const initialState: initialStateType = {
  city: 'Paris',
  offers: [],
  sorting: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: '',
  offerById: defaultOffer,
  commentsByHotelId: [{
    "comment": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    "date": "Fri Mar 11 2022 12:52:10 GMT+0300 (Москва, стандартное время)",
    "id": 1,
    "rating": 4,
    "user": {
      "avatarUrl": "img/1.png",
      "id": 1,
      "isPro": false,
      "name": "Oliver.conner"
    }
  }],
  nearbyHotelsById: []
}

const offerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(appStart, (state) => {
      state = initialState
    })
    .addCase(appLoadOffers, (state, action) => {
      state.offers = action.payload
      state.isDataLoaded = true
    })
    .addCase(cityFilter, (state, action) => {
      state.city = action.payload
    })
    .addCase(citySortBy, (state, action) => {
      state.sorting = action.payload
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(getOfferById, (state, action) => {
      state.offerById = defaultOffer;
      state.offerById = action.payload;
    })
    .addCase(getCommentsById, (state, action) => {
      state.commentsByHotelId = action.payload;
    })
    .addCase(getNearbyHotelsById, (state, action) => {
      state.nearbyHotelsById = action.payload.slice(0, 3);
    })
    .addCase(setFavoriteStatus, (state, action) => {
      state.offers = state.offers.map(offer => {
        if(offer.id === action.payload.id) {
          offer = {...action.payload}
        }
        return offer
      })
    }).addCase(postComment, (state, action) => {
      state.commentsByHotelId = action.payload
    })

});

export default offerReducer
