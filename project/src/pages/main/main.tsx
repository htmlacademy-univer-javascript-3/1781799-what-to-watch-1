import React, { FC, useEffect, useMemo, useState } from 'react';
import { FilmList } from '../../components/film-list/film-list';
import { Genre } from '../../types/genre.enum';
import { useAppDispatch, useAppSelector } from '../../components/hooks/store-helpers';
import { GenreList } from '../../components/genre-list/genre-list';
import { ShowMoreButton } from '../../components/show-more-button/show-more-button';
import { HeaderUserBlock } from '../../components/header-user-block/header-user-block';
import { Loader } from '../../components/loader/loader';
import { getActiveGenre, getFilms, getPromoFilm } from '../../store/app/app-selectors';
import { fetchPromoFilm } from '../../store/api-actions';

export const MainPage: FC = () => {
  const activeGenre = useAppSelector(getActiveGenre);
  const films = useAppSelector(getFilms);
  const [visibleFilmsCount, setVisibleFilmsCount] = useState<number>(8);
  const filteredFilms = useMemo(() => films.filter((film) => film.genre === activeGenre || activeGenre === Genre.AllGenres), [films, activeGenre]);
  const promoFilm = useAppSelector(getPromoFilm);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!promoFilm) {
      dispatch(fetchPromoFilm());
    }
  }, [dispatch, promoFilm]);

  if (!promoFilm) {
    return <Loader/>;
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name}/>
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

          <HeaderUserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList genres={[Genre.AllGenres, ...new Set(films.map((film) => film.genre))]} setVisibleFilmsCount={setVisibleFilmsCount}/>
          <FilmList films={filteredFilms.slice(0, visibleFilmsCount)} />
          <ShowMoreButton setVisibleFilmsCount={setVisibleFilmsCount} isVisible={filteredFilms.length > visibleFilmsCount}/>
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
