import { Genre } from '../../types/genre.enum';
import { Token } from '../../services/token';

export type Film = {
  id: number;
  name: string;
  posterImage: string;
  videoLink: string;
  genre: Genre;
  released: number;
  runTime?: number;
  description?: string;
  director?: string;
  starring?: string[];
  rating?: number;
  scoresCount?: number;
}

export type PromoFilm = Film & {
  genre: Genre;
  released: number;
  bigPosterImagePath: string;
};

export type User = {
  avatarUrl: string;
  token: Token;
}
