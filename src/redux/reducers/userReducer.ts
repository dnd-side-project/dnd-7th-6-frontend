import {Reducer} from 'redux';

import {LOGIN} from '../types/UserActionType';

const initialState = {
  isLogined: false,
  userInfo: {},
};

const tabBarReducer: Reducer = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case LOGIN:
      return {...state, isLogined: true, userInfo: {...payload.userInfo}};
    default:
      return state;
  }
};

export default tabBarReducer;
