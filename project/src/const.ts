export const RATING_COEFFICIENT = 20;
export const MAX_REVIEW_STARS_COUNT = 5;

export enum ValidReviewTextLength {
  Min = 50,
  Max = 300,
}

export enum AppRoute {
  Main = "/",
  Login = "/login",
  Favorites = "/favorites",
  OfferId = ":id",
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

export const cityNames = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];