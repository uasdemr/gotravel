import {createAction} from '@reduxjs/toolkit'
import {Offer} from '../types/offer'
import {ReviewType} from '../types/review'

type CityName = string

export const appStart = createAction('app/start')
export const appFetchOffers = createAction<Offer[]>('app/fetchOffers')
export const appFetchReviews = createAction<ReviewType[]>('app/FetchReviews')

export const cityFilter = createAction<CityName>('city/filter')
export const citySortBy = createAction('city/sortBy')
export const cityOfferHover = createAction('city/offerHover')
export const cityOfferClick = createAction('city/offerClick')
