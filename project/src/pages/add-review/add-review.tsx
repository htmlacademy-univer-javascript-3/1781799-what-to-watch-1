import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFilmById } from '../../mocks/films';
import { AddReviewForm } from '../../components/add-review-form/add-review-form';
import { useAppSelector } from '../../components/hooks/store-helpers';
import { HeaderUserBlock } from '../../components/header-user-block/header-user-block';

export const AddReview: FC = () => {
  const { films } = useAppSelector((state) => state);
  const { id } = useParams();
  const film = getFilmById(films, Number(id));

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film?.posterImage} alt={film?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className={'breadcrumbs__link'} to={`/films/${film?.id}`}>{film?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className={'breadcrumbs__link'} to={`/films/${film?.id}/review`}>Add review</Link>
              </li>
            </ul>
          </nav>

          <HeaderUserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film?.posterImage} alt={film?.name} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm />
      </div>

    </section>
  );
};
