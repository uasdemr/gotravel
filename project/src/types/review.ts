import { OfferHost } from "./offer";

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: OfferHost;
};
