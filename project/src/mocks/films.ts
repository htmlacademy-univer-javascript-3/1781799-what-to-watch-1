import { Film, PromoFilm } from '../pages/main/main.models';
import { Genre } from '../types/genre.enum';

export const promoFilm: PromoFilm = {
  id: 0,
  title: 'The Grand Budapest Hotel',
  genre: Genre.DRAMA,
  year: 2014,
  posterImagePath: 'img/the-grand-budapest-hotel-poster.jpg',
  bigPosterImagePath: 'img/bg-the-grand-budapest-hotel.jpg',
  videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
};

export const films: Film[] = [
  {
    id: 0,
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    posterImagePath: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: Genre.DRAMA,
    year: 2014,
  },
  {
    id: 1,
    title: 'Bohemian Rhapsody',
    posterImagePath: 'img/bohemian-rhapsody.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    year: 2014,
    genre: Genre.DRAMA,
  },
  {
    id: 2,
    title: 'Macbeth',
    posterImagePath: 'img/macbeth.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    year: 2014,
    genre: Genre.COMEDY,
  },
  {
    id: 3,
    title: 'Aviator',
    posterImagePath: 'img/aviator.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    year: 2014,
    genre: Genre.COMEDY,
  },
  {
    id: 4,
    title: 'We need to talk about Kevin',
    posterImagePath: 'img/we-need-to-talk-about-kevin.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    year: 2014,
    genre: Genre.COMEDY,
  },
  {
    id: 5,
    title: 'What We Do in the Shadows',
    posterImagePath: 'img/what-we-do-in-the-shadows.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    year: 2014,
    genre: Genre.COMEDY,
  },
  {
    id: 6,
    title: 'Revenant',
    posterImagePath: 'img/revenant.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    year: 2014,
    genre: Genre.COMEDY,
  },
  {
    id: 7,
    title: 'Johnny English',
    posterImagePath: 'img/johnny-english.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    year: 2014,
    genre: Genre.THRILLER,
  },
  {
    id: 8,
    title: 'Shutter Island',
    posterImagePath: 'img/shutter-island.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    year: 2014,
    genre: Genre.THRILLER,
  },
  {
    id: 9,
    title: 'Pulp Fiction',
    posterImagePath: 'img/pulp-fiction.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    year: 2014,
    genre: Genre.THRILLER,
  },
  {
    id: 10,
    title: 'No Country for Old Men',
    posterImagePath: 'img/no-country-for-old-men.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    year: 2014,
    genre: Genre.THRILLER,
  },
  {
    id: 11,
    title: 'Snatch',
    posterImagePath: 'img/snatch.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    year: 2014,
    genre: Genre.CRIME,
  },
  {
    id: 12,
    title: 'Moonrise Kingdom',
    posterImagePath: 'img/moonrise-kingdom.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    year: 2014,
    genre: Genre.CRIME,
  },
  {
    id: 13,
    title: 'Seven Years in Tibet',
    posterImagePath: 'img/seven-years-in-tibet.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    year: 2014,
    genre: Genre.CRIME,
  },
  {
    id: 14,
    title: 'Midnight Special',
    posterImagePath: 'img/midnight-special.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    year: 2014,
    genre: Genre.KIDS_AND_FAMILY,
  },
  {
    id: 15,
    title: 'War of the Worlds',
    posterImagePath: 'img/war-of-the-worlds.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    year: 2014,
    genre: Genre.KIDS_AND_FAMILY,
  },
  {
    id: 16,
    title: 'Dardjeeling Limited',
    posterImagePath: 'img/dardjeeling-limited.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    year: 2014,
    genre: Genre.KIDS_AND_FAMILY,
  },
  {
    id: 17,
    title: 'Orlando',
    posterImagePath: 'img/orlando.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    year: 2014,
    genre: Genre.KIDS_AND_FAMILY,
  },
  {
    id: 18,
    title: 'Mindhunter',
    posterImagePath: 'img/mindhunter.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    year: 2014,
    genre: Genre.SCI_FI,
  },
  {
    id: 19,
    title: 'Midnight Special',
    posterImagePath: 'img/midnight-special.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    year: 2014,
    genre: Genre.SCI_FI,
  }
];

export const getFilmById = (id: number): Film =>
  films.find<Film>((film): film is Film => film.id === id) ?? films[0];

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
