import {
  FC,
  useState,
} from 'react';
import { FilmCard } from '../film/filmCard';
import { Film } from '../../pages/main/main.models';

type Props = {
  films: Film[];
}

export const FilmList: FC<Props> = (props) => {
  const [, setActiveFilmCard] = useState<number>(-1);

  return (
    <div className="catalog__films-list">
      {props.films.map((film) => <FilmCard key={film.name} film={film} onHover={setActiveFilmCard}/>)}
    </div>
  );
};
