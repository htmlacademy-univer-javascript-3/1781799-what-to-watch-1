import { MainPage } from '../../pages/main/main';
import { PromoFilm, User } from '../../pages/main/main.models';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../common/models';
import { SignIn } from '../../pages/sign-in/sign-in';
import { PrivateRoute } from '../private-route/private-route';
import { MyList } from '../../pages/my-list/my-list';
import { FilmPage } from '../../pages/film/filmPage';
import { AddReview } from '../../pages/add-review/add-review';
import { Player } from '../../pages/player/player';
import { NotFoundError } from '../../pages/not-found-error/not-found-error';
import { useAppSelector } from '../hooks/store-helpers';
import { Loader } from '../loader/loader';

type Props = {
  promoFilm: PromoFilm;
  user: User;
};

function App(props: Props): JSX.Element {
  const { films, isFilmsLoading } = useAppSelector((state) => state);
  if (isFilmsLoading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<MainPage promoFilm={props.promoFilm} user={props.user}/>}/>
          <Route path={AppRoute.SignIn} element={<SignIn/>}/>
          <Route path={AppRoute.MyList}
            element={<PrivateRoute authStatus={AuthStatus.NoAuth}><MyList films={films}/></PrivateRoute>}
          />
          <Route path={AppRoute.Film}>
            <Route index element={<FilmPage films={films} />}/>
            <Route path={AppRoute.AddReview} element={<AddReview/>}/>
          </Route>
          <Route path={AppRoute.Player} element={<Player film={props.promoFilm}/>}/>
          <Route path={AppRoute.NotFoundError} element={<NotFoundError/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
