import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  Film,
  User,
} from '../pages/main/main.models';
import {
  AppDispatch,
  State,
} from '../types/state.type';
import { AuthResponse } from '../types/auth-response';
import { Review } from '../types/review.type';

type ApiConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const fetchFilmsAction = createAsyncThunk<Film[], undefined, ApiConfig>(
  'app/fetchFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Film[]>('films');
    return data;
  },
);

export const fetchPromoFilm = createAsyncThunk<Film, undefined, ApiConfig>(
  'app/fetchPromoFilm',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Film>('promo');
    return data;
  },
);

export const fetchFilm = createAsyncThunk<Film, number, ApiConfig>(
  'film/fetchFilm',
  async (filmId, { extra: api }) => {
    const { data } = await api.get<Film>(`films/${filmId}`);
    return data;
  },
);

export const fetchFilmReviews = createAsyncThunk<Review[], number, ApiConfig>(
  'film/fetchFilmReviews',
  async (filmId, { extra: api }) => {
    const { data } = await api.get<Review[]>(`comments/${filmId}`);
    return data;
  },
);

export const fetchSimilarFilms = createAsyncThunk<Film[], number, ApiConfig>(
  'film/fetchSimilarFilms',
  async (filmId, { extra: api }) => {
    const { data } = await api.get<Film[]>(`films/${filmId}/similar`);
    return data;
  },
);

export const postFilmReview = createAsyncThunk<Review, {filmId: number; review: { comment: string; rating: number }}, ApiConfig>(
  'film/postFilmReview',
  async (reviewData, { extra: api }) => {
    const { data } = await api.post<Review>(`comments/${reviewData.filmId}`, {...reviewData.review});
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<User, undefined, ApiConfig>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<User>('login');
    return data;
  }
);

export const loginAction = createAsyncThunk<User, AuthResponse, ApiConfig>(
  'user/login',
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<User>('login', { email, password });
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, ApiConfig>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete('logout');
  }
);
