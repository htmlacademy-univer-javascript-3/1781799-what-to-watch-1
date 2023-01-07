import { ChangeEvent, FC, useState } from 'react';

export const AddReviewForm: FC = () => {
  const [formValues, setFormValues] = useState<{
    starsCount: number;
    reviewText: string;
  }>({
    starsCount: 0,
    reviewText: ''
  });

  const handleReviewTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues((prevValue) => ({
      ...prevValue,
      reviewText: event.target.value,
    }));
  };

  const handleStarsCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevState) => ({
      ...prevState,
      starsCount: Number(event.target.value),
    }));
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {
            Array.from(Array(10).keys()).map((n) => (
              <span key={n}>
                <input className="rating__input" id={`star-${n + 1}`} type="radio" name="rating" value={n + 1} checked={formValues.starsCount === n + 1} onChange={handleStarsCountChange}/>
                <label className="rating__label" htmlFor={`star-${n + 1}`}>Rating {n + 1}</label>
              </span>
            ))
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={formValues.reviewText} onChange={handleReviewTextChange}/>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};
