import { Offer } from "../../types/offer";
import { cityNames } from '../../const'
import FavoriteList from "../../components/favorite-list/favorite-list";

type FavoritesType = {
  offers: Offer[];
}
function Favorites({ offers }: FavoritesType): JSX.Element {

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {cityNames.map((cityName) => <FavoriteList key={cityName} cityName={cityName} offers={offers.filter((offer) => offer.city.name === cityName)} />)}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Favorites;
