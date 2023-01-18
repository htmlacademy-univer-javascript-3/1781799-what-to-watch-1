import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Film, User } from '../pages/main/main.models';
import { setAuthStatus, setFilms, setFilmsLoading, setUser } from './action';
import { AppDispatch, State } from '../types/state.type';
import { AuthResponse } from '../types/auth-response';
import { dropToken, saveToken } from '../services/token';
import { AuthStatus } from '../common/models';

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

export const checkAuthAction = createAsyncThunk<void, undefined, ApiConfig>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data: user } = await api.get<User>('login');
      dispatch(setUser(user));
      dispatch(setAuthStatus({ authStatus: AuthStatus.Auth }));
    } catch {
      dispatch(setAuthStatus({ authStatus: AuthStatus.NoAuth }));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthResponse, ApiConfig>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data: user } = await api.post<User>('login', { email, password });
    saveToken(user.token);
    dispatch(setUser(user));
    dispatch(setAuthStatus({ authStatus: AuthStatus.Auth }));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, ApiConfig>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete('logout');
    dispatch(setAuthStatus({ authStatus: AuthStatus.NoAuth }));
    dropToken();
  }
);
