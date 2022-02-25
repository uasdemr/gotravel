import { Offer } from '../../types/offer'
import FavoriteCard from '../../components/favorite-card/favorite-card'

type FavoriteListPropsType = {
  offers: Offer[];
  cityName: string;
}

function FavoriteList({ offers, cityName }: FavoriteListPropsType): JSX.Element | null {
  return offers.length ?
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer: Offer) => <FavoriteCard card={offer} cityName={cityName} key={offer.id} />)}
      </div>
    </li> : null;
}

export default FavoriteList