import {Reducer} from 'redux';

import {CHANGE_FOCUS, CLOSE_FILTER_SHEET, OPEN_FILTER_SHEET} from '../types/PostActionType';

const initialState = {
  isOpenFilterSheet: false,
  focusedFilter: 0,
};

const postReducer: Reducer = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case OPEN_FILTER_SHEET:
      return {...state, isOpenFilterSheet: true};
    case CLOSE_FILTER_SHEET:
      return {...state, isOpenFilterSheet: false};
    case CHANGE_FOCUS:
      return {...state, focusedFilter: payload.focus};
    default:
      return state;
  }
};

export default postReducer;
