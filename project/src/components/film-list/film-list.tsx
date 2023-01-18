import { FC, useState } from 'react';
import { FilmCard } from '../film/filmCard';
import { useAppSelector } from '../hooks/store-helpers';
import { Film } from '../../pages/main/main.models';

type Props = {
  forFilm?: Film;
}

export const FilmList: FC<Props> = (props) => {
  const { films } = useAppSelector((state) => state);
  const filmList = props.forFilm
    ? films.filter((f) => f !== props.forFilm && f.genre === props.forFilm?.genre).slice(0, 4)
    : films;
  const [, setActiveFilmCard] = useState<number>(-1);

  return (
    <div className="catalog__films-list">
      {filmList.map((film) => <FilmCard key={film.title} film={film} onHover={setActiveFilmCard}/>)}
    </div>
  );
};
