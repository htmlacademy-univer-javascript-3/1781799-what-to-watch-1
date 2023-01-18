import {
  AuthStatus,
  ReducerName,
} from '../../common/models';
import {
  Film,
  User,
} from '../../pages/main/main.models';
import { State } from '../../types/state.type';

export const getAuthStatus = (state: State): AuthStatus => state[ReducerName.User].authorizationStatus;
export const getUser = (state: State): User | null => state[ReducerName.User].user;
export const getFavoriteFilms = (state: State): Film[] => state[ReducerName.User].favoriteFilms;
