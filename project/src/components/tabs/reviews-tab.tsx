import { FC } from 'react';
import { Review } from '../../types/review.type';
import { ReviewCard } from '../review-card/review-card';

type Props = {
  reviews: Review[];
};

export const ReviewsTab: FC<Props> = (props) => (
  <div className="film-card__reviews film-card__row">
    {
      Array.from(Array(Math.ceil(props.reviews.length / 3)).keys()).map((cur) => (
        <div key={cur} className="film-card__reviews-col">
          {
            props.reviews
              .slice(cur * 3, cur * 3 + 3)
              .map((review) => <ReviewCard key={review.id} review={review}/>)
          }
        </div>
      ))
    }
  </div>
);
