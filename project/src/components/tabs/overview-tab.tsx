import { FC } from 'react';
import { Film } from '../../pages/main/main.models';
import { getDescriptionByRating } from '../../common/functions';

type Props = {
  film: Film;
};

export const OverviewTab: FC<Props> = (props) => (
  <>
    <div className="film-rating">
      <div className="film-rating__score">{props.film.rating?.toFixed(1)}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{getDescriptionByRating(props.film.rating || 10)}</span>
        <span className="film-rating__count">{props.film.scoresCount}</span>
      </p>
    </div>

    <div className="film-card__text">
      <p>{props.film.description}</p>

      <p className="film-card__director"><strong>Director: {props.film.director}</strong></p>

      <p className="film-card__starring"><strong>Starring: {props.film.starring?.slice(0, 3).join(', ')}{props.film.starring?.length || 0 > 3 ? ' and other' : null}.</strong></p>
    </div>
  </>
);
