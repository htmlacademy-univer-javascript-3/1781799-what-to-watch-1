import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../common/models';
import { FC } from 'react';
import { useAppSelector } from '../hooks/store-helpers';

type Props = {
  children: JSX.Element;
};

export const PrivateRoute: FC<Props> = (props) => {
  const { authorizationStatus } = useAppSelector((state) => state);

  return (
    authorizationStatus === AuthStatus.Auth
      ? props.children
      : <Navigate to={AppRoute.SignIn}/>
  );
};
