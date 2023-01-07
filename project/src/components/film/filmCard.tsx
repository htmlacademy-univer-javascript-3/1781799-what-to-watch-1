import { Dispatch, FC, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  id: number;
  title: string;
  posterImagePath: string;
  onHover?: Dispatch<SetStateAction<number>>;
}

export const FilmCard: FC<Props> = (props) => (
  <article className="small-film-card catalog__films-card" onMouseEnter={() => props.onHover?.((_) => props.id)} onMouseLeave={() => props.onHover?.((_) => -1)}>
    <div className="small-film-card__image">
      <img src={props.posterImagePath} alt={props.title} width="280" height="175"/>
    </div>
    <h3 className="small-film-card__title">
      <Link className="small-film-card__link" to={`/films/${props.id}`}>{props.title}</Link>
    </h3>
  </article>
);
