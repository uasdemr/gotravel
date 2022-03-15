
export type User = {
  avatarUrl: string;
  email: string;
  id: number | null;
  isPro: false;
  name:  string;
  token:  string;
}

export type UserInitialState = {
  user: User;
  isDataLoaded: boolean;
  error: string | null | unknown;
};
