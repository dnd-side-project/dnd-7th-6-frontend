import {Reducer} from 'redux';

import {
  CHANGE_BOTTOMSHEET_HEIGHT,
  CHANGE_MAP_COORD,
  FOCUS_BOOTH,
  INPUT_SEARCH_KEYWORD,
} from '../types/MapActionType';

const initialState = {
  focusBooth: null,
  searchKeyword: '',
  mapCoord: {latitude: 0, longitude: 0},
  bottomSheetHeightIndex: 0,
};

const mapReducer: Reducer = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case FOCUS_BOOTH:
      return {...state, focusBooth: payload.booth};
    case INPUT_SEARCH_KEYWORD:
      return {...state, searchKeyword: payload.keyword};
    case CHANGE_MAP_COORD:
      return {...state, mapCoord: payload.coord};
    case CHANGE_BOTTOMSHEET_HEIGHT:
      return {...state, bottomSheetHeightIndex: payload.index};
    default:
      return state;
  }
};

export default mapReducer;
