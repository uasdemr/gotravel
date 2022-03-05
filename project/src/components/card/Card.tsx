import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer'

type OfferProps = {
  offer: Offer;
  onCardPlaceHover: (id: number) => void;
  typeView: string;
}

function Card({ offer, onCardPlaceHover, typeView }: OfferProps): JSX.Element {
  const { isPremium, previewImage, price, rating, type, description, isFavorite, id } = offer;

  const handlePlaceCardMouseEnter = (id: number) => {
    onCardPlaceHover(id);
  };


  return (
    <article
      onMouseEnter={() => { handlePlaceCardMouseEnter(id) }} onMouseLeave={() => handlePlaceCardMouseEnter(0)}
      id={'' + id}
      className={cn({ 'near-places__card place-card': typeView === 'nearCard', 'cities__place-card place-card': typeView === 'cityCard' })} //"cities__place-card place-card"
    >
      {isPremium && <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/#">
          <img
            className="place-card__image"
            src={'/' + previewImage}
            alt="Place"
            width="260"
            height="200"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? "place-card__bookmark-button--active" : null} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: Math.floor(rating) * 20 }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={'/offers/' + id} >{description}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
