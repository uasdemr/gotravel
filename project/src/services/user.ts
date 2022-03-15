const AUTH_USER_PROFILE = 'user';

type SaveUserType = {
  avatarUrl: string;
  email: string;
  id: number | null;
  isPro: false;
  name: string;
}

export const getUser = (): string => {
  const user = localStorage.getItem(AUTH_USER_PROFILE);
  return user ?? '';
};

export const saveUser = (user: SaveUserType): void => {
  localStorage.setItem(AUTH_USER_PROFILE, JSON.stringify(user));
};

export const dropUser = (): void => {
  localStorage.removeItem(AUTH_USER_PROFILE);
};
