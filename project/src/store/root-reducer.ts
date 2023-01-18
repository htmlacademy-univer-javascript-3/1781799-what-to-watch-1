import { combineReducers } from '@reduxjs/toolkit';
import { appReducer } from './app/app-reducer';
import { filmReducer } from './film/film-reducer';
import { userReducer } from './user/user-reducer';
import { ReducerName } from '../common/models';

export const rootReducer = combineReducers({
  [ReducerName.App]: appReducer.reducer,
  [ReducerName.Film]: filmReducer.reducer,
  [ReducerName.User]: userReducer.reducer,
});
