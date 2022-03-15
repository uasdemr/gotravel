

export const RATING_COEFFICIENT = 20;
export const MAX_REVIEW_STARS_COUNT = 5;
export const ROOMS_IMAGES_COUNT = 6;

export enum ValidReviewTextLength {
  Min = 50,
  Max = 300,
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum AppRoute {
  Main = "/",
  Login = "/login",
  Favorites = "/favorites",
  OfferId = "offers/:id",
  Offers = '/offers',
  NotFound = "*",
}

export enum AuthorizationStatus {
  Auth = "AUTH",
  NoAuth = "NO_AUTH",
  Unknown = "UNKNOWN",
}

export const SortOfferVariants = [
 'Popular', 'Price: low to high', 'Price: high to low', 'Top rated first',
]

export const CITY_NAMES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const URL_MARKER_DEFAULT = '../img/pin.svg';
export const URL_MARKER_CURRENT = '../img/pin-active.svg';

export enum APIRoute {
  Offers = '/hotels',
  Favorite = '/favorite',
  Comments = '/comments',
  Nearby = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}
