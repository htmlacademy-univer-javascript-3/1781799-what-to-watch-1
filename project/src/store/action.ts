import { createAction } from '@reduxjs/toolkit';
import { Film } from '../pages/main/main.models';
import { Genre } from '../types/genre.enum';

export const changeActiveGenre = createAction<{ newGenre: Genre }>('changeActiveGenre');
export const setFilmList = createAction<{ films: Film[] }>('setFilms');
