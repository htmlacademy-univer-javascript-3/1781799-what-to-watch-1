import { createReducer } from '@reduxjs/toolkit';
import { Genre } from '../types/genre.enum';
import { setActiveGenre, setAuthStatus, setFilms, setFilmsLoading, setUser } from './action';
import { Film } from '../pages/main/main.models';
import { AuthStatus } from '../common/models';
import { User } from '../pages/main/main.models';

const initialState = {
  activeGenre: Genre.AllGenres,
  films: [] as Film[],
  isFilmsLoading: true,
  authorizationStatus: AuthStatus.Unknown,
  user: null as User | null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      state.activeGenre = action.payload.newGenre;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload.films;
    })
    .addCase(setFilmsLoading, (state, action) => {
      state.isFilmsLoading = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload.authStatus;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});
