import { Genre } from '../../types/genre.enum';

export type Film = {
  id: number;
  title: string;
  posterImagePath: string;
  videoPath: string;
  genre: Genre;
  year: number;
  runTime?: number;
  description?: string;
  director?: string;
  starring?: string[];
  rating?: number;
  ratingCount?: number;
}

export type PromoFilm = Film & {
  genre: Genre;
  year: number;
  bigPosterImagePath: string;
};

export type User = {
  avatarPath: string;
}
