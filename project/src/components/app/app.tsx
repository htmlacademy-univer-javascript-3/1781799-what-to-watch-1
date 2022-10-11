import { MainPage } from '../../pages/main/main';
import { Film, PromoFilm, User } from '../../pages/main/main.models';

type Props = {
  promoFilm: PromoFilm;
  films: Film[];
  user: User;
};

function App(props: Props): JSX.Element {
  return (
    <MainPage
      promoFilm={props.promoFilm}
      user={props.user}
      films={props.films}
    />
  );
}

export default App;
