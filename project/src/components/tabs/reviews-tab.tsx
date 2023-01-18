import { FC } from 'react';
import { ReviewCard } from '../review-card/review-card';
import { useAppSelector } from '../hooks/store-helpers';
import { getFilmReviews } from '../../store/film/film-selectors';

export const ReviewsTab: FC = () => {
  const reviews = useAppSelector(getFilmReviews);

  return (
    <div className="film-card__reviews film-card__row">
      {
        Array.from(Array(Math.ceil(reviews.length / 2)).keys()).map((cur) => (
          <div key={cur} className="film-card__reviews-col">
            {
              reviews
                .slice(cur * 2, cur * 2 + 2)
                .map((review) => <ReviewCard key={review.id} review={review}/>)
            }
          </div>
        ))
      }
    </div>
  );
};
