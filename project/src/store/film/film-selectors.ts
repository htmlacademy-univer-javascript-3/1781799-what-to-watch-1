import { ReducerName } from '../../common/models';
import { Film } from '../../pages/main/main.models';
import { Review } from '../../types/review.type';
import { State } from '../../types/state.type';

export const getFilm = (state: State): Film | null => state[ReducerName.Film].film;
export const getFilmReviews = (state: State): Review[] => state[ReducerName.Film].reviews;
export const getSimilarFilms = (state: State): Film[] => state[ReducerName.Film].similarFilms;
