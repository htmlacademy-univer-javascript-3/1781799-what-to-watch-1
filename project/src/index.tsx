import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { promoFilm } from './mocks/films';
import { user } from './mocks/user';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchFilmsAction } from './store/api-action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const props = {
  promoFilm,
  user,
};

store.dispatch(fetchFilmsAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App {...props}/>
    </Provider>
  </React.StrictMode>,
);
