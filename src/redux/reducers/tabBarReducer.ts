import {Reducer} from 'redux';

import {HIDE_TABBAR, SHOW_TABBAR} from '../types/TabBarActionType';

const initialState = {
  isVisibleTabBar: true,
};

const tabBarReducer: Reducer = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case SHOW_TABBAR:
      return {...state, isVisibleTabBar: true};
    case HIDE_TABBAR:
      return {...state, isVisibleTabBar: false};
    default:
      return state;
  }
};

export default tabBarReducer;
