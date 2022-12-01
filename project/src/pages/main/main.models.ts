export type Film = {
  title: string;
  posterImagePath: string;
}

export type PromoFilm = Film & {
  genre: string;
  year: number;
  bigPosterImagePath: string;
};

export type User = {
  avatarPath: string;
}
