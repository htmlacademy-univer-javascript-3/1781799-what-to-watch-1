import { MainPage } from '../../pages/main/main';
import { Film, PromoFilm, User } from '../../pages/main/main.models';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../common/models';
import { SignIn } from '../../pages/sign-in/sign-in';
import { PrivateRoute } from '../private-route/private-route';
import { MyList } from '../../pages/my-list/my-list';
import { FilmPage } from '../../pages/film/filmPage';
import { AddReview } from '../../pages/add-review/add-review';
import { Player } from '../../pages/player/player';
import { NotFoundError } from '../../pages/not-found-error/not-found-error';

type Props = {
  promoFilm: PromoFilm;
  films: Film[];
  user: User;
};

function App(props: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<MainPage promoFilm={props.promoFilm} user={props.user} films={props.films}/>}/>
          <Route path={AppRoute.SignIn} element={<SignIn/>}/>
          <Route path={AppRoute.MyList}
                 element={<PrivateRoute authStatus={AuthStatus.NoAuth}><MyList/></PrivateRoute>}/>
          <Route path={AppRoute.Film}>
            <Route index element={<FilmPage/>}/>
            <Route path={AppRoute.AddReview} element={<AddReview/>}/>
          </Route>
          <Route path={AppRoute.Player} element={<Player/>}/>
          <Route path={AppRoute.NotFoundError} element={<NotFoundError/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
