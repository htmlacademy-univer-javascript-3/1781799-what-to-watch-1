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
  backgroundImage?: string;
  isFavorite?: boolean;
}

export type User = {
  avatarUrl: string;
  token: Token;
}
