import { FC } from 'react';
import { films } from '../../mocks/films';
import { changeActiveGenre, setFilmList } from '../../store/action';
import { Genre } from '../../types/genre.enum';
import { useAppDispatch, useAppSelector } from '../hooks/store-helpers';

type Props = {
  genreList: string[];
}

export const GenreList: FC<Props> = (props) => {
  const {activeGenre} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleChangeActiveGenre = (genre: string) => {
    dispatch(changeActiveGenre({newGenre: genre as Genre}));
    dispatch(setFilmList({films: films.filter((film) => genre === Genre.ALL_GENRES || film.genre === genre)}));
  };

  return (
    <ul className="catalog__genres-list">
      {
        props.genreList.map((genre) => (
          <li className={`catalog__genres-item ${activeGenre === genre ? 'catalog__genres-item--active' : ''}`}
            key={genre} onClick={() => handleChangeActiveGenre(genre)}
          >
            <span className="catalog__genres-link">{genre}</span>
          </li>
        ))
      }
    </ul>
  );
};
