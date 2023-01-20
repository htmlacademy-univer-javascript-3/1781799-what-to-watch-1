import {
  FC,
  SyntheticEvent,
} from 'react';
import {
  Link,
  useNavigate,
} from 'react-router-dom';
import {
  AppRoute,
  AuthStatus,
} from '../../common/models';
import {
  useAppDispatch,
  useAppSelector,
} from '../hooks/store-helpers';
import {
  getAuthStatus,
  getUser,
} from '../../store/user/user-selectors';
import { logoutAction } from '../../store/api-actions';

export const HeaderUserBlock: FC = () => {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignOut = (event: SyntheticEvent) => {
    event.preventDefault();

    dispatch(logoutAction());
    navigate(AppRoute.Main);
  };

  return (
    <ul className="user-block">
      {
        authorizationStatus === AuthStatus.Auth
          ? (
            <>
              <li className="user-block__item">
                <Link to="/mylist">
                  <div className="user-block__avatar">
                    <img src={user?.avatarUrl} alt="User avatar" width="63" height="63"/>
                  </div>
                </Link>
              </li>
              <li className="user-block__item">
                <a href="/" className="user-block__link" onClick={handleSignOut}>Sign out</a>
              </li>
            </>
          )
          : <Link to={`/${AppRoute.SignIn}`} className="user-block__link">Sign in</Link>
      }
    </ul>
  );
};
