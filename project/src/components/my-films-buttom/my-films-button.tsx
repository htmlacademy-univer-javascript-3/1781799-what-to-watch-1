import {
  FC,
  useEffect,
  useState,
} from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../hooks/store-helpers';
import {
  changeFilmStatus,
  fetchFavoriteFilms,
  fetchFilm,
  fetchPromoFilm,
} from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import { getPromoFilm } from '../../store/app/app-selectors';
import { getFilm } from '../../store/film/film-selectors';
import { getFavoriteFilms } from '../../store/user/user-selectors';

export const MyFilmsButton: FC = () => {
  const film = useAppSelector(getFilm);
  const promoFilm = useAppSelector(getPromoFilm);
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const params = useParams();
  const id = params.id;
  const dispatch = useAppDispatch();
  const [buttonIconId, setButtonIconId] = useState<string>('#add');

  useEffect(() => {
    if (id && film && Number(id) === film.id) {
      setButtonIconId(film.isFavorite ? '#in-list' : '#add');
    } else if (promoFilm) {
      setButtonIconId(promoFilm.isFavorite ? '#in-list' : '#add');
    }
  }, [film, promoFilm, id]);

  const toggleIsFavorite = () => {
    if (id) {
      dispatch(changeFilmStatus({ filmId: Number(id), isFavorite: !film?.isFavorite }))
        .then(() => {
          setButtonIconId(film?.isFavorite ? '#add' : '#in-list');
          dispatch(fetchFavoriteFilms());
          dispatch(fetchFilm(Number(id)));
        });
    } else if (promoFilm) {
      dispatch(changeFilmStatus({ filmId: promoFilm.id, isFavorite: !promoFilm.isFavorite }))
        .then(() => {
          setButtonIconId(promoFilm.isFavorite ? '#add' : '#in-list');
          dispatch(fetchFavoriteFilms());
          dispatch(fetchPromoFilm());
        });
    }
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={toggleIsFavorite}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={buttonIconId}/>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favoriteFilms.length}</span>
    </button>
  );
};
