import { FC } from 'react';
import { Film } from '../../pages/main/main.models';
import { getFormatTime } from '../../common/functions';

type Props = {
  film: Film;
};

export const DetailsTab: FC<Props> = (props) => (
  <div className="film-card__text film-card__row">
    <div className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Director</strong>
        <span className="film-card__details-value">{props.film.director}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Starring</strong>
        <span className="film-card__details-value">{props.film.starring?.join(',\n').split('\n').map((actor) => <div key={actor}>{actor}</div>)}</span>
      </p>
    </div>

    <div className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Run Time</strong>
        <span className="film-card__details-value">{getFormatTime(props.film.runTime ? props.film.runTime * 60 : 600)}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Genre</strong>
        <span className="film-card__details-value">{props.film.genre}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Released</strong>
        <span className="film-card__details-value">{props.film.released}</span>
      </p>
    </div>
  </div>
);
