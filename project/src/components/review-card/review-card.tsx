import {
  FC,
  useMemo,
} from 'react';
import { format } from 'date-fns';
import { Review } from '../../types/review.type';

type Props = {
  review: Review;
};

export const ReviewCard: FC<Props> = (props) => {
  const reviewDate = useMemo(() => new Date(props.review.date), [props.review]);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{props.review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{props.review.user.name || ''}</cite>
          <time className="review__date" dateTime={format(reviewDate, 'yyyy-MM-dd')}>{format(reviewDate, 'MMMM dd, yyyy')}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{props.review.rating.toFixed(1)}</div>
    </div>
  );
};
