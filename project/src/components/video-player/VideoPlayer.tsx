import { FC, useEffect, useRef } from 'react';
import { Film } from '../../pages/main/main.models';

type Props = {
  film: Film;
  muted: boolean;
  isPlaying: boolean;
  width: number;
  height: number;
};

export const VideoPlayer: FC<Props> = (props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (props.isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.load();
    }
  }, [props.isPlaying]);

  return (
    <video ref={videoRef} src={props.film.videoPath} poster={props.film.posterImagePath} muted={props.muted} width={props.width} height={props.height}/>
  );
};
