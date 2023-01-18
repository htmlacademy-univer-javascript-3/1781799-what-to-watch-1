import {
  AuthStatus,
  ReducerName,
} from '../../common/models';
import {
  dropToken,
  saveToken,
} from '../../services/token';
import {
  checkAuthAction, fetchFavoriteFilms,
  loginAction,
  logoutAction,
} from '../api-actions';
import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../types/state.type';

const initialState: UserState = {
  authorizationStatus: AuthStatus.Unknown,
  user: null,
  favoriteFilms: [],
};

export const userReducer = createSlice({
  name: ReducerName.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(logoutAction.fulfilled, (state) => {
        dropToken();
        state.user = null;
        state.authorizationStatus = AuthStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        saveToken(action.payload.token);
        state.user = action.payload;
        state.authorizationStatus = AuthStatus.Auth;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.user = null;
        state.authorizationStatus = AuthStatus.NoAuth;
      })
      .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
      });
  }
});
