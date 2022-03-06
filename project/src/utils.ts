import { Offer } from "./types/offer";


export const getFormattedDate = (date: string) => {
  const month = new Date(date).toLocaleString("default", { month: "long" });
  const year = new Date(date).getFullYear();

  return `${month} ${year}`;
};

export const getCapitalizeFirstLetter = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

export const getOffer = (offers: Offer[], id: string | number | undefined) => offers.find((item) => {
  return item.id === Number(id)
}
);

export const getOffersByCity = (city: string, offers: Offer[]) => {
  console.log(offers.filter((item) => item.city.name === city));
  
  return offers.filter((item) => item.city.name === city)
};

export const sortBySorting = (offers: Offer[], sorting: string): Offer[] => {
  if (sorting === 'Popular') {
   return offers
  }
  if (sorting === 'Price: low to high') {
    offers.sort((a, b) => {
      if (b.price > a.price) return -1;
      if (b.price < a.price) return 1;
      return 0;
    })
  }
  if (sorting === 'Price: high to low') {
    offers.sort((a, b) => {
      if (b.price > a.price) return 1;
      if (b.price < a.price) return -1;
      return 0;
    })
  }
  if (sorting === 'Top rated first') {
    offers.sort((a, b) => {
      if (b.rating > a.rating) return 1;
      if (b.rating < a.rating) return -1;
      return 0;
    })
  }
  return offers
}

export const sortPriceHighToLow = () => { }

export const sortRatedFirst = () => { }