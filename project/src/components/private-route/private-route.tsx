import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../common/models';
import { FC } from 'react';

type Props = {
  authStatus: AuthStatus;
  children: JSX.Element;
};

export const PrivateRoute: FC<Props> = (props) => {
  const { authStatus, children } = props;

  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn}/>
  );
};
