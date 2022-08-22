import {Reducer} from 'redux';

import {LOGIN, USER_INFO, SET_ACCESS_TOKEN, SET_INTERCEPTOR} from '../types/UserActionType';

const initialState = {
  isLoggedIn: false,
  isSettingInterceptor: false,
  accessToken: '',
  userInfo: {},
};

const tabBarReducer: Reducer = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case LOGIN:
      return {...state, isLoggedIn: payload.isloggedIn};
    case USER_INFO:
      return {...state, userInfo: {...payload.userInfo}};
    case SET_ACCESS_TOKEN:
      return {...state, accessToken: payload.accessToken};
    case SET_INTERCEPTOR:
      return {...state, isSettingInterceptor: true};
    default:
      return state;
  }
};

export default tabBarReducer;
