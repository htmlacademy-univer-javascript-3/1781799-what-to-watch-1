import { AppRoute, AuthStatus, } from '../../common/models';
import { Navigate } from 'react-router-dom';
import { FC } from 'react';
import { useAppSelector } from '../hooks/store-helpers';
import { getAuthStatus } from '../../store/user/user-selectors';
import { Loader } from '../loader/loader';

type Props = {
  children: JSX.Element;
};

export const PrivateRoute: FC<Props> = (props) => {
  const authorizationStatus = useAppSelector(getAuthStatus);

  if (authorizationStatus === AuthStatus.Auth) {
    return props.children;
  } else if (authorizationStatus === AuthStatus.Unknown) {
    return <Loader/>;
  }

  return <Navigate to={`/${AppRoute.SignIn}`}/>;
};
