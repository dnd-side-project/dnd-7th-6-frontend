import {LOGIN, USER_INFO, SET_ACCESS_TOKEN} from '../types/UserActionType';

import {User} from 'src/types';

export const loginAction = (isloggedin: boolean) => ({
  type: LOGIN,
  payload: {isloggedin},
});

export const changeUserInfo = (userInfo: User | {}) => ({
  type: USER_INFO,
  payload: {userInfo},
});

export const setAccessToken = (accessToken: string) => ({
  type: SET_ACCESS_TOKEN,
  payload: {accessToken},
});
