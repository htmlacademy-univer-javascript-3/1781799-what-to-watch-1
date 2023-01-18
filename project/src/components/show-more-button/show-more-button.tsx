import { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  isVisible: boolean;
  setVisibleFilmsCount: Dispatch<SetStateAction<number>>;
};

export const ShowMoreButton: FC<Props> = (props) => (
  <div className="catalog__more" style={{ display: props.isVisible ? 'block' : 'none' }}>
    <button className="catalog__button" type="button" onClick={() => props.setVisibleFilmsCount((n) => n + 8)}>
      Show more
    </button>
  </div>
);
