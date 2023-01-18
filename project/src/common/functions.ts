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

export const getFormatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 60 / 60);
  const hoursString = `${hours}`.padStart(2, '0');
  const minutes = `${Math.floor(seconds / 60 - hours * 60)}`.padStart(2, '0');
  const sec = `${Math.floor(seconds % 60)}`.padStart(2, '0');

  return hours < 1
    ? `${minutes}:${sec}`
    : `${hoursString}:${minutes}:${sec}`;
};
