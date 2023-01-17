import { FC } from 'react';
import { Film } from '../../pages/main/main.models';
import { getDescriptionByRating } from '../../mocks/films';

type Props = {
  film: Film;
};

export const OverviewTab: FC<Props> = (props) => (
  <>
    <div className="film-rating">
      <div className="film-rating__score">{props.film.rating}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{getDescriptionByRating(props.film.rating || 10)}</span>
        <span className="film-rating__count">{props.film.ratingCount}</span>
      </p>
    </div>

    <div className="film-card__text">
      <p>{props.film.description}</p>

      <p className="film-card__director"><strong>Director: {props.film.director}</strong></p>

      <p className="film-card__starring"><strong>Starring: {props.film.starring?.join(', ')} and other</strong></p>
    </div>
  </>
);
