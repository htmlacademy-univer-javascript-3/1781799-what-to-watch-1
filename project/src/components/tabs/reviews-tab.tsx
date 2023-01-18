import { FC, useEffect, useState } from 'react';
import { ReviewCard } from '../review-card/review-card';
import { Review } from '../../types/review.type';
import { api } from '../../store';

type Props = {
  filmId: number;
};

export const ReviewsTab: FC<Props> = (props) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    api.get<Review[]>(`comments/${props.filmId}`)
      .then(({ data }) => setReviews(data));
  }, []);

  return (
    <div className="film-card__reviews film-card__row">
      {
        Array.from(Array(Math.ceil(reviews.length / 3)).keys()).map((cur) => (
          <div key={cur} className="film-card__reviews-col">
            {
              reviews
                .slice(cur * 3, cur * 3 + 3)
                .map((review) => <ReviewCard key={review.id} review={review}/>)
            }
          </div>
        ))
      }
    </div>
  );
};
