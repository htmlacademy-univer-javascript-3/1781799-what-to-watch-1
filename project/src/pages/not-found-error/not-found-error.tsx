import { FC } from 'react';
import { Link } from 'react-router-dom';

export const NotFoundError: FC = () => (
  <section>
    <h1>404 Not Found</h1>
    <Link to="/">Go back to the main page</Link>
  </section>
);
