import {Reducer} from 'redux';

import {FOCUS_BOOTH, INPUT_SEARCH_KEYWORD} from '../types/MapActionType';

const initialState = {
  focusBooth: null,
  searchKeyword: '',
};

const mapReducer: Reducer = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case FOCUS_BOOTH:
      return {...state, focusBooth: payload.booth};
    case INPUT_SEARCH_KEYWORD:
      return {...state, searchKeyword: payload.keyword};
    default:
      return state;
  }
};

export default mapReducer;
