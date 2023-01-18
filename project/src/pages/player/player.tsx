import {
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Link,
  useParams,
} from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector,
} from '../../components/hooks/store-helpers';
import { getFilm } from '../../store/film/film-selectors';
import { fetchFilm, fetchFilmReviews, fetchSimilarFilms } from '../../store/api-actions';

export const Player: FC = () => {
  const film = useAppSelector(getFilm);
  const params = useParams();
  const id = Number(params.id);
  const dispatch = useAppDispatch();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    if (!film || film.id !== id) {
      dispatch(fetchFilm(Number(id)));
    }
  }, [dispatch, id, film]);

  const handleTimeUpdate = useCallback(() => {
    if (videoRef?.current?.currentTime && videoRef?.current?.duration) {
      setTimeLeft(videoRef?.current?.duration - videoRef?.current?.currentTime);
      setProgress((videoRef?.current?.currentTime / videoRef?.current?.duration) * 100);
    }
  }, []);

  const makeFullscreen = useCallback(() => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current?.requestFullscreen();
    }
  }, []);

  const formatTime = useCallback((seconds: number) => {
    const hours = Math.floor(seconds / 60 / 60);

    if (hours) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes}:${Math.floor(seconds % 60)}`;
    }

    const minutes = Math.floor(seconds / 60);
    return `${hours}:${minutes}:${Math.floor(seconds % 60)}`;
  }, []);

  const handleToggleClick = useCallback(() => {
    if (videoRef.current?.paused) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }

    setIsPlaying((prev) => !prev);
  }, []);

  const handleExitClick = useCallback(() => {
    dispatch(fetchFilmReviews(id));
    dispatch(fetchSimilarFilms(id));
  }, [dispatch, id]);

  return (
    <div className="player">
      <video className="player__video" src={film?.videoLink} ref={videoRef} poster={film?.posterImage}
        onTimeUpdate={() => handleTimeUpdate()}
      />

      <Link to={`/films/${id}`} type="button" className="player__exit" onClick={handleExitClick}>Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{ left: `${progress}%` }}>Toggler</div>
          </div>
          <div className="player__time-value">{formatTime(timeLeft)}</div>
        </div>

        <div className="player__controls-row">

          <button type="button" className="player__play" onClick={handleToggleClick}>
            {
              isPlaying
                ? (
                  <>
                    <svg viewBox="0 0 14 21" width="14" height="21">
                      <use xlinkHref="#pause"/>
                    </svg>
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"/>
                    </svg>
                    <span>Play</span>
                  </>
                )
            }

          </button>
          <div className="player__name">{film?.name}</div>

          <button type="button" className="player__full-screen" onClick={makeFullscreen}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};
