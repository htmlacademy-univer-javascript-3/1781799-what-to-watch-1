import { Middleware } from 'redux';
import { browserHistory } from '../browser-history';
import { reducer } from '../store/reducer';
import { PayloadAction } from '@reduxjs/toolkit';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> = (_store) => (next) => (action: PayloadAction<string>) => {
  if (action.type === 'redirectToRoute') {
    browserHistory.push(action.payload);
  }

  return next(action);
};
