import { createAction } from '@reduxjs/toolkit';
import { Film } from '../pages/main/main.models';
import { Genre } from '../types/genre.enum';

export const setActiveGenre = createAction<{ newGenre: Genre }>('setActiveGenre');
export const setFilms = createAction<{ films: Film[] }>('setFilms');
export const setFilmsLoading = createAction<boolean>('setFilmsLoading');

