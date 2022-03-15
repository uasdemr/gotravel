import { AuthorizationStatus, ROOMS_IMAGES_COUNT } from "../../const";
import ReviewList from "../../components/review-list/review-list";
import ReviewForm from "../../components/review-form/review-form";
import Map from '../../components/map/Map';
import OfferCardList from '../../components/offer-card-list/offer-card-list'
import { fetchCommentsByIdAction, fetchHotelsByIdAction, fetchNearbyHotelsByIdAction } from '../../store/api-actions'
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Room(): JSX.Element {

  const { id: propertyId } = useParams();
  const dispatch = useAppDispatch()

  const offerById = useAppSelector(state => state.offers.offerById)
  const authorizationStatus = useAppSelector(state => state.offers.authorizationStatus)
  const reviews = useAppSelector(state => state.offers.commentsByHotelId)
  const nearbyHotels = useAppSelector(state => state.offers.nearbyHotelsById)
  const readyOffers = [...nearbyHotels, offerById]

  const {
    title,
    images,
    isPremium,
    isFavorite,
    description,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
  } = offerById;


  const makeImages = (quantity: number) => {
    const imagesSlice = images.slice(0, quantity)
    const imageElements = imagesSlice.map((image, index) => {
      return (
        <div key={index} className="property__image-wrapper">
          <img className="property__image" src={image} alt="Studio" />
        </div>
      );
    });
    return imageElements
  }

  const goodElements = goods.map((good, index) => {
    return <li key={index} className="property__inside-item">{good}</li>;
  });

  useEffect(() => {
    dispatch(fetchHotelsByIdAction(propertyId))
    dispatch(fetchCommentsByIdAction(propertyId))
    dispatch(fetchNearbyHotelsByIdAction(propertyId))

  }, [propertyId])

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">{makeImages(ROOMS_IMAGES_COUNT)}</div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium && (
              <div className="property__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="property__name-wrapper">
              <h1 className="property__name">{title}</h1>
              {/* <button
                className={`${isFavorite
                  ? "place-card__bookmark-button--active"
                  : "place-card__bookmark-button"
                  } button`}
                type="button"
              > */}
              <button
                className={isFavorite ? "property__bookmark-button property__bookmark-button--active button" : "property__bookmark-button button"}
                type="button"
              >
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: Math.floor(rating) * 22 }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">
                {rating}
              </span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms}
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">{goodElements}</ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div
                  className={`${host.isPro && "property__avatar-wrapper--pro"
                    } property__avatar-wrapper user__avatar-wrapper`}
                >
                  <img
                    className="property__avatar user__avatar"
                    src={'/' + host.avatarUrl}
                    width="74"
                    height="74"
                    alt="Host avatar"
                  />
                </div>
                <span className="property__user-name">{host.name}</span>
                <span className="property__user-status">Pro</span>
              </div>
              <div className="property__description">
                <p className="property__text">{description}</p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <ReviewList reviews={reviews} />
              {authorizationStatus === AuthorizationStatus.Auth && (
                <ReviewForm />
              )}
            </section>
          </div>
        </div>
        <section className="property__map map">
          <Map className="property__map map" activeOffer={offerById.id} offers={readyOffers} height={579} typeView='room' />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <OfferCardList offers={nearbyHotels} typeView='nearCard' onListItemHover={() => {
            console.log('Hi from Near places!!!');
          }} />
        </section>
      </div>
    </main>
  );
}

export default Room;
