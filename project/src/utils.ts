import { Offer } from "./types/offer";


export const getFormattedDate = (date: string) => {
  const month = new Date(date).toLocaleString("default", { month: "long" });
  const year = new Date(date).getFullYear();

  return `${month} ${year}`;
};

export const getCapitalizeFirstLetter = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

export const getOffer = (offers: Offer[], id: string | number | undefined) => offers.find((item) => {
  return item.id === Number(id)}
  );

export const getOffersByCity = (city: string, offers: Offer[]) => {
  // if (!city) return
  return offers.filter((item) => item.city.name === city)
};