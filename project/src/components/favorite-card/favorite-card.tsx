import { useAppDispatch } from '../../hooks';
import { fetchFavoritesAction, setFavoriteAction } from '../../store/api-actions';
import {Offer} from '../../types/offer'

type FavoriteTypeProps = {
  card: Offer;
  cityName: string;
}

function FavoriteCard({card, cityName}: FavoriteTypeProps):JSX.Element {
  const {isPremium, previewImage, price, rating, type, description, isFavorite, id} = card;

  const dispatch = useAppDispatch()

  const onFavoriteClickHandler = async () => {
    await dispatch(setFavoriteAction(card))
    dispatch(fetchFavoritesAction())
  }

    return (
        <article key={id} className="favorites__card place-card">
          {isPremium && <div className="place-card__mark">
            <span>Premium</span>
          </div>}

          <div className="favorites__image-wrapper place-card__image-wrapper">
            <a href="/#">
              <img
                className="place-card__image"
                src={previewImage}
                alt="Place"
                width="150"
                height="110"
              />
            </a>
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">€{price}</b>
                <span className="place-card__price-text">
                  /&nbsp;night
                </span>
              </div>
              <button
              onClick={onFavoriteClickHandler}
                className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
                type="button"
              >
                <svg
                  className="place-card__bookmark-icon"
                  width="18"
                  height="19"
                >
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{ width: Math.floor(rating) * 20 }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <a href="/#">{description}</a>
            </h2>
            <p className="place-card__type">{type}</p>
          </div>
        </article>
    )
}

export default FavoriteCard
