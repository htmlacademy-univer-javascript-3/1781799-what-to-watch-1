export const getDescriptionByRating = (rating: number): string | undefined => {
  if (rating < 0 || rating > 10) {
    return undefined;
  }

  if (rating < 3) {
    return 'Bad';
  } else if (rating < 5) {
    return 'Normal';
  } else if (rating < 8) {
    return 'Good';
  } else if (rating < 10) {
    return 'Very good';
  } else if (rating === 10) {
    return 'Awesome';
  }
};
