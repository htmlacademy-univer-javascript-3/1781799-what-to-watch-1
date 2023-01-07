import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VideoPlayer } from '../video-player/VideoPlayer';
import { Film } from '../../pages/main/main.models';

type Props = {
  film: Film;
  onHover?: Dispatch<SetStateAction<number>>;
}

export const FilmCard: FC<Props> = (props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    let startPlaying = true;
    const forceSetIsPlaying = () => {
      if (startPlaying) {
        setIsPlaying(true);
      }
    }

    if (isHovering) {
      setTimeout(forceSetIsPlaying, 1000);
    }

    return (() => {
      startPlaying = false;
    });
  }, [isHovering]);

  const handleMouseEnter = () => {
    props.onHover?.((_) => props.film.id);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    props.onHover?.((_) => -1);
    setIsHovering(false);
    setIsPlaying(false);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="small-film-card__image">
        <VideoPlayer muted film={props.film} isPlaying={isPlaying} width={280} height={175}/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${props.film.id}`}>{props.film.title}</Link>
      </h3>
    </article>
  );
};
