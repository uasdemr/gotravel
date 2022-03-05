import cn from 'classnames';
import Card from "../card/Card"
import { Offer } from '../../types/offer'

type OfferCardListProps = {
    offersByCity: Offer[];
    onListItemHover: (id: number) => void;
    typeView: string;
}

function OfferCardList({ offersByCity: offers, onListItemHover, typeView }: OfferCardListProps): JSX.Element {
    const onCardPlaceHover = (id: number) => {
        onListItemHover(id);
    };

    return (
        <div className={cn({ 'near-places__list places__list': typeView === 'nearCard', 'cities__places-list places__list tabs__content': typeView === 'cityCard' })}>
            {
                offers.map(offer => <Card
                    onCardPlaceHover={onCardPlaceHover}
                    key={offer.id}
                    offer={offer}
                    typeView={typeView}
                />)
            }
        </div>
    )
}

export default OfferCardList