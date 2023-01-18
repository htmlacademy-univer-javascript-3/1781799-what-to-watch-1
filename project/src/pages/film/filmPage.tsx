import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tabs } from '../../components/tabs/tabs';
import { FilmList } from '../../components/film-list/film-list';
import { Film } from '../main/main.models';
import { useAppDispatch, useAppSelector } from '../../components/hooks/store-helpers';
import { HeaderUserBlock } from '../../components/header-user-block/header-user-block';
import { api } from '../../store';
import { redirectToRoute } from '../../store/action';
import { AppRoute, AuthStatus } from '../../common/models';
import { Loader } from '../../components/loader/loader';

export const FilmPage: FC = () => {
  const { authorizationStatus } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [film, setFilm] = useState<Film>();
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    api.get<Film>(`films/${id as string}`)
      .then(({ data }) => {
        if (data) {
          setFilm(data);
        } else {
          dispatch(redirectToRoute(AppRoute.NotFoundError));
        }
      });
    api.get<Film[]>(`films/${id as string}/similar`)
      .then(({ data }) => setFilms(data));
  }, [id]);

  if (!film) {
    return <Loader/>;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.posterImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <a href="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <HeaderUserBlock/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {
                  authorizationStatus === AuthStatus.Auth
                    ? <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
                    : null
                }
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <Tabs film={film}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={films}/>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};
