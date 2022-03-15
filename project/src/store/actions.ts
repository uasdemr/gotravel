import {createAction} from '@reduxjs/toolkit'
import {Offer} from '../types/offer'
import {Comment, ReviewType} from '../types/review'
import {AppRoute, AuthorizationStatus} from '../const';
import {User} from '../types/user-login-response'

type CityName = string
type Sorting = string

type PostCommentType = {
  comment: string,
  rating: number
}

// Main Application Actions
export const appStart = createAction('app/start')
export const appLoadOffers = createAction<Offer[]>('app/loadOffers')
export const getNearbyHotelsById = createAction<Offer[]>('app/getNearbyHotels')
export const appFetchReviews = createAction<ReviewType[]>('app/FetchReviews')
export const setError = createAction<string>('app/setError');
export const appLoadFavorites = createAction<Offer[]>('app/loadFavorites')
export const setFavoriteStatus = createAction<Offer>('app/setFavoriteStatus')
export const setFavoriteFavoriteCardStatus = createAction<Offer>('app/setFavoriteFavoriteCardStatus')
export const postComment = createAction<Comment[]>('app/postComment')


export const redirectToRouteAction = createAction<AppRoute>('app/redirectToRoute');

// City Actions
export const cityFilter = createAction<CityName>('city/filter')
export const citySortBy = createAction<Sorting>('city/sortBy')
export const cityOfferHover = createAction('city/offerHover')
export const cityOfferClick = createAction('city/offerClick')
export const getOfferById = createAction<Offer>('city/getOfferById');
export const getCommentsById = createAction<Comment[]>('city/getCommentsById');

// User Actions
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setUser = createAction<User>('user/setUser');
export const unSetUser = createAction('user/unSetUser');
