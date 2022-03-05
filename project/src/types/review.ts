import { OfferHost } from "./offer";

export type ReviewType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: OfferHost;
};
