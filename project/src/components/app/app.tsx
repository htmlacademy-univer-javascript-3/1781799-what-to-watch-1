import { MainPage } from '../../pages/main/main';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../common/models';
import { SignIn } from '../../pages/sign-in/sign-in';
import { PrivateRoute } from '../private-route/private-route';
import { MyList } from '../../pages/my-list/my-list';
import { FilmPage } from '../../pages/film/filmPage';
import { AddReview } from '../../pages/add-review/add-review';
import { Player } from '../../pages/player/player';
import { NotFoundError } from '../../pages/not-found-error/not-found-error';
import { useAppSelector } from '../hooks/store-helpers';
import { Loader } from '../loader/loader';
import React from 'react';
import { HistoryRouter } from '../history-router/history-router';
import { browserHistory } from '../../browser-history';

function App(): JSX.Element {
  const { films, isFilmsLoading } = useAppSelector((state) => state);
  if (isFilmsLoading) {
    return <Loader/>;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<MainPage/>}/>
          <Route path={AppRoute.SignIn} element={<SignIn/>}/>
          <Route path={AppRoute.MyList} element={<PrivateRoute><MyList films={films}/></PrivateRoute>}/>
          <Route path={AppRoute.Film}>
            <Route index element={<FilmPage/>}/>
            <Route path={AppRoute.AddReview} element={<AddReview/>}/>
          </Route>
          <Route path={AppRoute.Player} element={<Player/>}/>
          <Route path={AppRoute.NotFoundError} element={<NotFoundError/>}/>
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
