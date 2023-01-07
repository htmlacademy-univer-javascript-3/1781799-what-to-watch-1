import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films, promoFilm } from './mocks/films';
import { user } from './mocks/user';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

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
