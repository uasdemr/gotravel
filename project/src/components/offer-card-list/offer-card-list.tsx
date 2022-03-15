import { useAppSelector } from '../../hooks/index';
import { getOffersByCity, sortBySorting } from '../../utils';

import cn from 'classnames';
import Card from "../card/Card"
import { Offer } from '../../types/offer'
import { useEffect, useState } from 'react';

type OfferCardListProps = {
  onListItemHover: (id: number) => void;
  typeView: string;
  offers: Offer[];
}


//Надо как то засунуть функцию onListItemHover useCallback
// или сделать это в компоненте Card


function OfferCardList({ onListItemHover, typeView, offers }: OfferCardListProps): JSX.Element {
  const city = useAppSelector((state) => state.offers.city);
  // const offers = useAppSelector((state) => state.offers.offers);
  const sorting = useAppSelector((state) => state.offers.sorting);
  const nearbyHotels = useAppSelector((state) => state.offers.nearbyHotelsById);
  let offersByCity = getOffersByCity(city, offers);

  const [cardListState, setCardListState] = useState<Offer[]>(offersByCity)

  useEffect(() => {
    if (typeView === 'nearCard' && nearbyHotels.length) {
      const sorted = sortBySorting([...nearbyHotels], sorting)
      if(sorted?.length) {
        setCardListState(sorted)
      }
    }
    if (typeView === 'cityCard' && offersByCity) {
      const sorted = sortBySorting([...offersByCity], sorting)
      if(sorted?.length) {
        setCardListState(sorted)
      }
    }
  }, [sorting, city, typeView, offers])

  return (
    <div className={cn({ 'near-places__list places__list': typeView === 'nearCard', 'cities__places-list places__list tabs__content': typeView === 'cityCard' })}>
      {
        cardListState.map(offer => {
          return <Card
            onListItemHover={onListItemHover}
            key={offer.id}
            offer={offer}
            typeView={typeView}
          />
        })
      }
    </div>
  )
}

export default OfferCardList
