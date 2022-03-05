import { OfferCity, Offer, Location } from "../types/offer"

export type Point = Location & {
    id: number;
  };

// export type MapPropType = {
//     height: number;
//     city: OfferCity;
//     points: Offer[];
//     selectedPoint: Point | undefined;
//   }

  export type MapPropType = {
    offers: Offer[];
    height: number;
    activeOffer?: number;
    className: string;
  };