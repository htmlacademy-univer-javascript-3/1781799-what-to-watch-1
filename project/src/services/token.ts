const authToken = 'authToken';

export type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(authToken);
  return token ?? '';
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(authToken, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(authToken);
};
