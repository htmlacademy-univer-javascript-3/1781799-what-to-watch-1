import { Film } from '../pages/main/main.models';
import { AppRoute } from '../common/models';
import { Genre } from '../types/genre.enum';
import { createAction } from '@reduxjs/toolkit';

export const setActiveGenre = createAction<{ newGenre: Genre }>('setActiveGenre');
export const setFilms = createAction<{ films: Film[] }>('setFilms');
export const setFilmsLoading = createAction<boolean>('setFilmsLoading');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

