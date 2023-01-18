import {
  Film,
  User,
} from '../pages/main/main.models';
import { AuthStatus } from '../common/models';
import { store } from '../store';
import { Genre } from './genre.enum';
import { Review } from './review.type';

export type AppState = {
  genre: Genre;
  films: Film[];
  isLoading: boolean;
  promoFilm: Film | null;
};

export type FilmState = {
  film: Film | null;
  reviews: Review[];
  similarFilms: Film[];
};

export type UserState = {
  authorizationStatus: AuthStatus;
  user: User | null;
  favoriteFilms: Film[];
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
