import { createReducer } from '@reduxjs/toolkit';
import { Genre } from '../types/genre.enum';
import { setActiveGenre, setFilms, setFilmsLoading } from './action';
import { Film } from '../pages/main/main.models';

const initialState = {
  activeGenre: Genre.AllGenres,
  films: [] as Film[],
  isFilmsLoading: true,
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
    });
});
