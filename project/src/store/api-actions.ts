import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../store';
import {store} from '../store';
import {Offer} from '../types/offer';
import {Comment, ReviewType} from '../types/review';
import {appLoadFavorites, appLoadOffers, getCommentsById, getNearbyHotelsById, getOfferById, postComment, requireAuthorization, setError, setFavoriteFavoriteCardStatus, setFavoriteStatus, setUser, unSetUser} from './actions';
import {saveToken, dropToken} from '../services/token';
import {errorHandle} from '../services/error-handle';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import { dropUser, saveUser } from '../services/user';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk(
  'app/fetchOffers',
  async () => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      store.dispatch(appLoadOffers(data));
    } catch(error) {
      errorHandle(error)
    }
  },
);
export const fetchFavoritesAction = createAsyncThunk(
  'app/fetchFavorites',
  async () => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Favorite);
      store.dispatch(appLoadFavorites(data));
    } catch(error) {
      errorHandle(error)
    }
  },
);

export const fetchHotelsByIdAction = createAsyncThunk(
  'app/fetchHotels',
  async (id: string | undefined) => {
    try {
      const {data} = await api.get<Offer>(APIRoute.Offers + `/${id}`);
      store.dispatch(getOfferById(data));
    } catch(error) {
      errorHandle(error)
    }
  },
);

export const fetchCommentsByIdAction = createAsyncThunk(
  'app/fetchComments',
  async (id: string | undefined) => {
    try {
      const {data} = await api.get<Comment[]>(APIRoute.Comments + `/${id}`);
      store.dispatch(getCommentsById(data));
    } catch(error) {
      errorHandle(error)
    }
  },
);

export const fetchNearbyHotelsByIdAction = createAsyncThunk(
  'app/fetchNearbyHotelsById',
  async (id: string | undefined) => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Nearby + `/${id}/nearby`);
      store.dispatch(getNearbyHotelsById(data));
    } catch(error) {
      errorHandle(error)
    }
  },
);

export const setFavoriteAction = createAsyncThunk(
  'app/setFavorite',
  async (offer: Offer) => {
    try {
      const status = Number(!offer.isFavorite)
      const {data} = await api.post<Offer>(APIRoute.Favorite + `/${offer.id}/` + status);
      store.dispatch(setFavoriteStatus(data));
    } catch(error) {
      errorHandle(error)
    }
  },
);

export const setFavoriteFavoriteCardAction = createAsyncThunk(
  'app/setFavorite',
  async (offer: Offer) => {
    try {
      const status = Number(!offer.isFavorite)
      const {data} = await api.post<Offer>(APIRoute.Favorite + `/${offer.id}/` + status);
      store.dispatch(setFavoriteFavoriteCardStatus(data));
    } catch(error) {
      errorHandle(error)
    }
  },
);


type PostCommentType = {
  comment: string;
  rating: number | null;
  id: string | undefined;
}
export const postCommentAction = createAsyncThunk(
  'app/postComment',
  async ({comment, rating, id }: PostCommentType) => {
    try {
      const {data} = await api.post<Comment[]>(APIRoute.Comments + `/${id}`, {comment, rating});
      store.dispatch(postComment(data));
    } catch(error) {
      errorHandle(error)
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try{
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const data = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.data.token);

      const userWithoutToken = {
        avatarUrl: data.data.avatarUrl,
        email: data.data.email,
        id: data.data.id,
        isPro: data.data.isPro,
        name: data.data.name,
      }
      saveUser(userWithoutToken)

      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(setUser(data.data))
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dropUser();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      store.dispatch(unSetUser());
    } catch (error) {
      errorHandle(error);
    }
  },
);

