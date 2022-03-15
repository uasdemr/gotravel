import { CITY_NAMES } from '../../const'
import FavoriteList from "../../components/favorite-list/favorite-list";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchFavoritesAction } from "../../store/api-actions";

function Favorites(): JSX.Element {
const dispatch = useAppDispatch()
const favorites = useAppSelector(state => state.favorites.favorites)

useEffect(() => {
  dispatch(fetchFavoritesAction())
  }, [])

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {CITY_NAMES.map((cityName) => <FavoriteList key={cityName} cityName={cityName} offers={favorites.filter((offer) => offer.city.name === cityName)} />)}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Favorites;
