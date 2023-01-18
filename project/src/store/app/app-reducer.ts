import { createSlice } from '@reduxjs/toolkit';
import { ReducerName } from '../../common/models';
import { Genre } from '../../types/genre.enum';
import { AppState } from '../../types/state.type';
import {
  setActiveGenre,
  setFilms,
  setFilmsLoading,
} from '../action';
import {
  fetchFilmsAction,
  fetchPromoFilm,
} from '../api-actions';

const initialState: AppState = {
  genre: Genre.AllGenres,
  films: [],
  isLoading: false,
  promoFilm: null
};

export const appReducer = createSlice({
  name: ReducerName.App,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setActiveGenre, (state, action) => {
        state.genre = action.payload.newGenre;
      })
      .addCase(setFilms, (state, action) => {
        state.films = action.payload.films;
      })
      .addCase(setFilmsLoading, (state, action) => {
        state.isLoading = action.payload;
      })
      .addCase(fetchPromoFilm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isLoading = false;
      });
  }
});
