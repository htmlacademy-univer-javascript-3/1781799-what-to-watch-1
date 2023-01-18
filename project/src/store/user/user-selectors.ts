import { AuthStatus, ReducerName } from '../../common/models';
import { State } from '../../types/state.type';
import { User } from '../../pages/main/main.models';

export const getAuthStatus = (state: State): AuthStatus => state[ReducerName.User].authorizationStatus;
export const getUser = (state: State): User | null => state[ReducerName.User].user;
