import {
  fetchFilm,
  fetchFilmReviews,
  fetchSimilarFilms,
} from '../api-actions';
import { createSlice } from '@reduxjs/toolkit';
import { ReducerName } from '../../common/models';
import { FilmState } from '../../types/state.type';

const initialState: FilmState = {
  film: null,
  reviews: [],
  similarFilms: [],
};

export const filmReducer = createSlice({
  name: ReducerName.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.film = action.payload;
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchFilmReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});
