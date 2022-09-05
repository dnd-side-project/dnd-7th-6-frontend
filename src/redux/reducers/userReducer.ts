import {Reducer} from 'redux';

import {LOGIN, USER_INFO, SET_ACCESS_TOKEN} from '../types/UserActionType';

const initialState = {
  isLoggedIn: false,
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
    default:
      return state;
  }
};

export default tabBarReducer;
