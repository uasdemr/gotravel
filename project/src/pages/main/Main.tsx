import {useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../hooks/index';

import { getCapitalizeFirstLetter, getOffer, getOffersByCity } from '../../utils';
import { Point } from '../../types/map';
import {Offer} from '../../types/offer'

import MainEmpty from '../../components/main-empty/main-empty';

import OfferCardList from '../../components/offer-card-list/offer-card-list'
import Sort from '../../components/sort/sort'
import Map from '../../components/map/Map';
import {cityFilter} from '../../store/actions'
import Tabs from '../../components/tabs/Tabs';

function Main(): JSX.Element {
  const [sorting, setSort] = useState('Popular')
  const [selectedOffer, setSelectedOffer] = useState(0)

  const dispatch = useAppDispatch();

  const offers = useAppSelector((state) => state.offers.offers);
  const city = useAppSelector((state) => state.offers.city);
  
  const offersByCity = getOffersByCity(city, offers);
  const onListItemHover = (offerId: number) => {
    if(!offerId) return
    const currentOffer = getOffer(offers, offerId) as Offer;
    const currentPoint: Point = {
      id: offerId,
      latitude: currentOffer.location.latitude,
      longitude: currentOffer.location.longitude,
      zoom: currentOffer.location.zoom,
    };
    
    setSelectedOffer(currentPoint.id);
  };

  const onTabClick = (cityName: string) => {
    dispatch(cityFilter(cityName))
  }

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs cityName={city} onTabClick={onTabClick} />
        <div className="cities">
          {offersByCity.length === 0 && <MainEmpty />}
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersByCity.length} places to stay in Amsterdam</b>
              <Sort sorting={sorting} setSort={setSort}/>
              <OfferCardList offersByCity={offersByCity} onListItemHover={onListItemHover} typeView='cityCard'/>
            </section>
            <div className="cities__right-section">
            {offers.length && (
              <Map
                offers={offersByCity}
                height={800}
                activeOffer={selectedOffer}
                className='cities__map map'
              />
            )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
