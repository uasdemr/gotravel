import { useState } from 'react'
import { useAppSelector } from '../../hooks/index';

import { Point } from '../../types/map';
import { Offer } from '../../types/offer'

import { getOffer, getOffersByCity } from '../../utils';

import OfferCardList from '../../components/offer-card-list/offer-card-list'
import Sort from '../../components/sort/sort'
import Map from '../../components/map/Map';
import MainEmpty from '../main-empty/main-empty';

function Cities(): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState(0)

  const city = useAppSelector((state) => state.offers.city);
  const offers = useAppSelector((state) => state.offers.offers);

  const offersByCity = getOffersByCity(city, offers);

  const onListItemHover = (offerId: number) => {
    if (!offerId) return
    const currentOffer = getOffer(offers, offerId) as Offer;
    const currentPoint: Point = {
      id: offerId,
      latitude: currentOffer.location.latitude,
      longitude: currentOffer.location.longitude,
      zoom: currentOffer.location.zoom,
    };

    setSelectedOffer(currentPoint.id);
  };

  return (
    <div className="cities">
      {offersByCity.length === 0 && <MainEmpty city={city} />}
      {offersByCity.length !== 0 && <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersByCity.length} places to stay in {city}</b>
          <Sort />
          <OfferCardList onListItemHover={onListItemHover} typeView='cityCard' />
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
      </div>}

      
    </div>
  )
}

export default Cities