import {Reducer} from 'redux';

import {
  CLOSE_POST_WRITE,
  HIDE_TABBAR,
  OPEN_POST_WRTIE,
  SHOW_TABBAR,
} from '../types/TabBarActionType';

const initialState = {
  isVisibleTabBar: true,
  isPostWriteScreen: false,
};

const tabBarReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TABBAR:
      return {...state, isVisibleTabBar: true};
    case HIDE_TABBAR:
      return {...state, isVisibleTabBar: false};
    case OPEN_POST_WRTIE:
      return {...state, isPostWriteScreen: true};
    case CLOSE_POST_WRITE:
      return {...state, isPostWriteScreen: false};
    default:
      return state;
  }
};

export default tabBarReducer;
