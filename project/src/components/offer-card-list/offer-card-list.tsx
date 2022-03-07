import {useAppSelector} from '../../hooks/index';
import { getOffersByCity, sortBySorting } from '../../utils';

import cn from 'classnames';
import Card from "../card/Card"
import { Offer } from '../../types/offer'
import { useEffect, useState } from 'react';

type OfferCardListProps = {
    onListItemHover: (id: number) => void;
    typeView: string;
}

function OfferCardList({ onListItemHover, typeView }: OfferCardListProps): JSX.Element {
    const city = useAppSelector((state) => state.offers.city);
    const offers = useAppSelector((state) => state.offers.offers);
    const sorting = useAppSelector((state) => state.offers.sorting);
    
    let offersByCity = getOffersByCity(city, offers);
    
    const [cardListState, setCardListState] = useState<Offer[]>(offersByCity)

    useEffect(() => {
        const sorted = sortBySorting(offersByCity, sorting)
        setCardListState(sorted)
    }, [sorting, city])

    return (
        <div className={cn({ 'near-places__list places__list': typeView === 'nearCard', 'cities__places-list places__list tabs__content': typeView === 'cityCard' })}>
            {
                cardListState.map(offer => <Card
                    onListItemHover={onListItemHover}
                    key={offer.id}
                    offer={offer}
                    typeView={typeView}
                />)
            }
        </div>
    )
}

export default OfferCardList