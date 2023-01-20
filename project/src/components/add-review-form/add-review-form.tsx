import {
  ChangeEvent,
  FC,
  FormEvent,
  useCallback,
  useState
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/store-helpers';
import { fetchFilmReviews, postFilmReview } from '../../store/api-actions';

type ReviewForm = {
  rating: number;
  comment: string;
}

type Props = {
  filmId: number;
};

export const AddReviewForm: FC<Props> = (props) => {
  const [formValues, setFormValues] = useState<ReviewForm>({ rating: 0, comment: '' });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formValues.comment && formValues.rating) {
      dispatch(postFilmReview({ review: formValues, filmId: props.filmId }))
        .then(() => dispatch(fetchFilmReviews(props.filmId)))
        .then(() => navigate(`/films/${props.filmId}`));
    }
  }, [formValues, navigate, props.filmId, dispatch]);

  const handleReviewTextChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues((prev) => ({ ...prev, comment: event.target.value, }));
  }, []);

  const handleStarsCountChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, rating: Number(event.target.value), }));
  }, []);

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {
            Array.from(Array(10).keys()).map((n) => (
              <span key={`star-${n + 1}`}>
                <input className="rating__input" id={`star-${n + 1}`} type="radio" name="rating" value={n + 1}
                  checked={formValues.rating === n + 1} onChange={handleStarsCountChange}
                />
                <label className="rating__label" htmlFor={`star-${n + 1}`}>Rating {n + 1}</label>
              </span>
            )).reverse()
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
