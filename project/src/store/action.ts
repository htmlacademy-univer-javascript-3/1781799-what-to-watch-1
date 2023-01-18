import { createAction } from '@reduxjs/toolkit';
import { Film, User } from '../pages/main/main.models';
import { Genre } from '../types/genre.enum';
import { AuthStatus } from '../common/models';

export const setActiveGenre = createAction<{ newGenre: Genre }>('setActiveGenre');
export const setFilms = createAction<{ films: Film[] }>('setFilms');
export const setFilmsLoading = createAction<boolean>('setFilmsLoading');
export const setAuthStatus = createAction<{ authStatus: AuthStatus }>('setAuthStatus');
export const setUser = createAction<User>('setUser');

