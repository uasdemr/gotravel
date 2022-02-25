import Card from "../card/Card"
import {Offer} from '../../types/offer'
import {useState} from 'react'

type OfferCardListProps = {
    offers: Offer[];
}

function OfferCardList({offers}: OfferCardListProps): JSX.Element {
    
    const [, setActiveOffer] = useState<null | number>(null);

return (
    <div className="cities__places-list places__list tabs__content">
        {
            offers.map(offer => <Card onMouseLeave={() => setActiveOffer(null)} 
                                    onMouseOver={() => setActiveOffer(offer.id)}
                                    key={offer.id}
                                    offer={offer}/>)
        }
    </div>
)
}

export default OfferCardList