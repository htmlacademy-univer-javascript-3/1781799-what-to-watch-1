import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { api } from '../../store';
import { Review } from '../../types/review.type';

type ReviewForm = {
  rating: number;
  comment: string;
}

type Props = {
  filmId: number;
};

export const AddReviewForm: FC<Props> = (props) => {
  const [formValues, setFormValues] = useState<ReviewForm>({
    rating: 0,
    comment: ''
  });

  const onSubmit = async (review: ReviewForm) => {
    await api.post<Review[]>(`comments/${props.filmId}`, { ...review });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formValues.comment && formValues.rating) {
      onSubmit(formValues);
    }
  };

  const handleReviewTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues((prevValue) => ({
      ...prevValue,
      comment: event.target.value,
    }));
  };

  const handleStarsCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevState) => ({
      ...prevState,
      rating: Number(event.target.value),
    }));
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {
            Array.from(Array(10).keys()).map((n) => (
              <span key={n}>
                <input className="rating__input" id={`star-${n + 1}`} type="radio" name="rating" value={n + 1}
                  checked={formValues.rating === n + 1} onChange={handleStarsCountChange}
                />
                <label className="rating__label" htmlFor={`star-${n + 1}`}>Rating {n + 1}</label>
              </span>
            ))
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
          value={formValues.comment} onChange={handleReviewTextChange}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};
