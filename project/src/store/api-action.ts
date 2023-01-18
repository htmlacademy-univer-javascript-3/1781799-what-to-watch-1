import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Film } from '../pages/main/main.models';
import { setFilms, setFilmsLoading } from './action';
import { AppDispatch, State } from '../types/state.type';

type ApiConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const fetchFilmsAction = createAsyncThunk<void, undefined, ApiConfig>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setFilmsLoading(true));
    const resp = await api.get<Film[]>('films');
    dispatch(setFilms({ films: resp.data }));
    dispatch(setFilmsLoading(false));
  },
);
