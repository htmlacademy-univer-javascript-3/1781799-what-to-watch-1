import {
  AppRoute,
  AuthStatus,
} from '../../common/models';
import { Navigate } from 'react-router-dom';
import { FC } from 'react';
import { useAppSelector } from '../hooks/store-helpers';
import { getAuthStatus } from '../../store/user/user-selectors';

type Props = {
  children: JSX.Element;
};

export const PrivateRoute: FC<Props> = (props) => {
  const authorizationStatus = useAppSelector(getAuthStatus);

  return (
    authorizationStatus === AuthStatus.Auth
      ? props.children
      : <Navigate to={AppRoute.SignIn}/>
  );
};
