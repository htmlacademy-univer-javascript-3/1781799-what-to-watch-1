import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { PromoFilm, User } from './pages/main/main.models';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const promoFilm: PromoFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
  posterImagePath: 'img/the-grand-budapest-hotel-poster.jpg',
  bigPosterImagePath: 'img/bg-the-grand-budapest-hotel.jpg'
};

const user: User = {
  avatarPath: 'img/avatar.jpg'
};

const films = [
  {
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    posterImagePath: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'
  },
  {
    title: 'Bohemian Rhapsody',
    posterImagePath: 'img/bohemian-rhapsody.jpg',
  },
  {
    title: 'Macbeth',
    posterImagePath: 'img/macbeth.jpg'
  },
  {
    title: 'Aviator',
    posterImagePath: 'img/aviator.jpg'
  },
  {
    title: 'We need to talk about Kevin',
    posterImagePath: 'img/we-need-to-talk-about-kevin.jpg'
  },
  {
    title: 'What We Do in the Shadows',
    posterImagePath: 'img/what-we-do-in-the-shadows.jpg'
  },
  {
    title: 'Revenant',
    posterImagePath: 'img/revenant.jpg'
  },
  {
    title: 'Johnny English',
    posterImagePath: 'img/johnny-english.jpg'
  },
  {
    title: 'Shutter Island',
    posterImagePath: 'img/shutter-island.jpg'
  },
  {
    title: 'Pulp Fiction',
    posterImagePath: 'img/pulp-fiction.jpg'
  },
  {
    title: 'No Country for Old Men',
    posterImagePath: 'img/no-country-for-old-men.jpg'
  },
  {
    title: 'Snatch',
    posterImagePath: 'img/snatch.jpg'
  },
  {
    title: 'Moonrise Kingdom',
    posterImagePath: 'img/moonrise-kingdom.jpg'
  },
  {
    title: 'Seven Years in Tibet',
    posterImagePath: 'img/seven-years-in-tibet.jpg'
  },
  {
    title: 'Midnight Special',
    posterImagePath: 'img/midnight-special.jpg'
  },
  {
    title: 'War of the Worlds',
    posterImagePath: 'img/war-of-the-worlds.jpg'
  },
  {
    title: 'Dardjeeling Limited',
    posterImagePath: 'img/dardjeeling-limited.jpg'
  },
  {
    title: 'Orlando',
    posterImagePath: 'img/orlando.jpg'
  },
  {
    title: 'Mindhunter',
    posterImagePath: 'img/mindhunter.jpg'
  },
  {
    title: 'Midnight Special',
    posterImagePath: 'img/midnight-special.jpg'
  }
];

const props = {
  promoFilm,
  user,
  films
};

root.render(
  <React.StrictMode>
    <App {...props}/>
  </React.StrictMode>,
);
