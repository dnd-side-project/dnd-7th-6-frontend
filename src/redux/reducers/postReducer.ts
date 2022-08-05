import {Reducer} from 'redux';

import {CLOSE_FILTER_SHEET, OPEN_FILTER_SHEET} from '../types/PostActionType';

const initialState = {
  isOpenFilterSheet: false,
};

const postReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_FILTER_SHEET:
      return {...state, isOpenFilterSheet: true};
    case CLOSE_FILTER_SHEET:
      return {...state, isOpenFilterSheet: false};
    default:
      return state;
  }
};

export default postReducer;
