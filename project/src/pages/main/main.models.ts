export type Film = {
  id: number;
  title: string;
  posterImagePath: string;
  videoPath: string;
  genre: string;
  year: number;
  runTime?: number;
  description?: string;
  director?: string;
  starring?: string[];
  rating?: number;
  ratingCount?: number;
}

export type PromoFilm = Film & {
  genre: string;
  year: number;
  bigPosterImagePath: string;
};

export type User = {
  avatarPath: string;
}
