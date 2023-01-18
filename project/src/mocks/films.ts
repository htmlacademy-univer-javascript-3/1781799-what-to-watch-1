import { Film, PromoFilm } from '../pages/main/main.models';
import { Genre } from '../types/genre.enum';

export const promoFilm: PromoFilm = {
  id: 0,
  name: 'The Grand Budapest Hotel',
  genre: Genre.Drama,
  released: 2014,
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  bigPosterImagePath: 'img/bg-the-grand-budapest-hotel.jpg',
  videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
};

export const films: Film[] = [
  {
    id: 0,
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    posterImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: Genre.Drama,
    released: 2014,
  },
  {
    id: 1,
    name: 'Bohemian Rhapsody',
    posterImage: 'img/bohemian-rhapsody.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    released: 2014,
    genre: Genre.Drama,
  },
  {
    id: 2,
    name: 'Macbeth',
    posterImage: 'img/macbeth.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    released: 2014,
    genre: Genre.Comedy,
  },
  {
    id: 3,
    name: 'Aviator',
    posterImage: 'img/aviator.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    released: 2014,
    genre: Genre.Comedy,
  },
  {
    id: 4,
    name: 'We need to talk about Kevin',
    posterImage: 'img/we-need-to-talk-about-kevin.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    released: 2014,
    genre: Genre.Comedy,
  },
  {
    id: 5,
    name: 'What We Do in the Shadows',
    posterImage: 'img/what-we-do-in-the-shadows.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    released: 2014,
    genre: Genre.Comedy,
  },
  {
    id: 6,
    name: 'Revenant',
    posterImage: 'img/revenant.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    released: 2014,
    genre: Genre.Comedy,
  },
  {
    id: 7,
    name: 'Johnny English',
    posterImage: 'img/johnny-english.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    released: 2014,
    genre: Genre.Thriller,
  },
  {
    id: 8,
    name: 'Shutter Island',
    posterImage: 'img/shutter-island.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    released: 2014,
    genre: Genre.Thriller,
  },
  {
    id: 9,
    name: 'Pulp Fiction',
    posterImage: 'img/pulp-fiction.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    released: 2014,
    genre: Genre.Thriller,
  },
  {
    id: 10,
    name: 'No Country for Old Men',
    posterImage: 'img/no-country-for-old-men.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    released: 2014,
    genre: Genre.Thriller,
  },
  {
    id: 11,
    name: 'Snatch',
    posterImage: 'img/snatch.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    released: 2014,
    genre: Genre.Crime,
  },
  {
    id: 12,
    name: 'Moonrise Kingdom',
    posterImage: 'img/moonrise-kingdom.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    released: 2014,
    genre: Genre.Crime,
  },
  {
    id: 13,
    name: 'Seven Years in Tibet',
    posterImage: 'img/seven-years-in-tibet.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    released: 2014,
    genre: Genre.Crime,
  },
  {
    id: 14,
    name: 'Midnight Special',
    posterImage: 'img/midnight-special.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    released: 2014,
    genre: Genre.KidsAndFamily,
  },
  {
    id: 15,
    name: 'War of the Worlds',
    posterImage: 'img/war-of-the-worlds.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    released: 2014,
    genre: Genre.KidsAndFamily,
  },
  {
    id: 16,
    name: 'Dardjeeling Limited',
    posterImage: 'img/dardjeeling-limited.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    released: 2014,
    genre: Genre.KidsAndFamily,
  },
  {
    id: 17,
    name: 'Orlando',
    posterImage: 'img/orlando.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    released: 2014,
    genre: Genre.KidsAndFamily,
  },
  {
    id: 18,
    name: 'Mindhunter',
    posterImage: 'img/mindhunter.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    released: 2014,
    genre: Genre.SciFi,
  },
  {
    id: 19,
    name: 'Midnight Special',
    posterImage: 'img/midnight-special.jpg',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    released: 2014,
    genre: Genre.SciFi,
  }
];

export const getFilmById = (filmList: Film[], id: number): Film =>
  filmList.find((film) => film.id === id) ?? filmList[0];

export const getDescriptionByRating = (rating: number): string | undefined => {
  if (rating < 0 || rating > 10) {
    return undefined;
  }

  if (rating < 3) {
    return 'Bad';
  } else if (rating < 5) {
    return 'Normal';
  } else if (rating < 8) {
    return 'Good';
  } else if (rating < 10) {
    return 'Very good';
  } else if (rating === 10) {
    return 'Awesome';
  }
};
