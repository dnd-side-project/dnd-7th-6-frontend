import {LOGIN} from '../types/UserActionType';

export const loginAction = (userInfo: any) => ({
  type: LOGIN,
  payload: {userInfo},
});
