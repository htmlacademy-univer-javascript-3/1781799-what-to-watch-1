import { createReducer } from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import { Genre } from '../types/genre.enum';
import { changeActiveGenre, setFilmList } from './action';

const initialState = {
  activeGenre: Genre.ALL_GENRES,
  films,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveGenre, (state, action) => {
      state.activeGenre = action.payload.newGenre;
    })
    .addCase(setFilmList, (state, action) => {
      state.films = action.payload.films;
    });
});
