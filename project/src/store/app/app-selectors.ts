import { State } from '../../types/state.type';
import { Film } from '../../pages/main/main.models';
import { ReducerName } from '../../common/models';

export const getFilms = (state: State): Film[] => state[ReducerName.App].films;
export const getActiveGenre = (state: State): string => state[ReducerName.App].genre;
export const getIsLoading = (state: State): boolean => state[ReducerName.App].isLoading;
export const getPromoFilm = (state: State): Film | null => state[ReducerName.App].promoFilm;
