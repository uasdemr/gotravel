import { OfferHost } from "./offer";

export type ReviewType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: OfferHost;
};

export type Comment = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
}
