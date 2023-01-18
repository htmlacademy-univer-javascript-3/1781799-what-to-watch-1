const authToken = 'authToken';

export type Token = string;

export const getToken = (): Token => localStorage.getItem(authToken) ?? '';
export const saveToken = (token: Token): void => localStorage.setItem(authToken, token);
export const dropToken = (): void => localStorage.removeItem(authToken);
