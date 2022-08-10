import {Reducer} from 'redux';

import {
  CHANGE_BOTTOMSHEET_HEIGHT,
  CHANGE_FILTER,
  CHANGE_MAP_COORD,
  CHANGE_TAG_DATA,
  FOCUS_BOOTH,
  INPUT_SEARCH_KEYWORD,
  INPUT_TAG_KEYWORD,
} from '../types/MapActionType';

import toggleTag from 'src/utils/toggleTag';

const initialState = {
  focusBooth: null,
  searchKeyword: '',
  tagKeyword: '',
  tagData: [],
  mapCoord: {latitude: 0, longitude: 0},
  bottomSheetHeightIndex: 0,
  filteredBrand: {},
  filteredTag: {},
};

const mapReducer: Reducer = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case FOCUS_BOOTH:
      return {...state, focusBooth: payload.booth};
    case INPUT_SEARCH_KEYWORD:
      return {...state, searchKeyword: payload.keyword};
    case INPUT_TAG_KEYWORD:
      return {...state, tagKeyword: payload.tagword};
    case CHANGE_TAG_DATA:
      return {...state, tagData: payload.tagData};
    case CHANGE_MAP_COORD:
      return {...state, mapCoord: payload.coord};
    case CHANGE_BOTTOMSHEET_HEIGHT:
      return {...state, bottomSheetHeightIndex: payload.index};
    case CHANGE_FILTER.BRAND:
      return {...state, filteredBrand: toggleTag(state.filteredBrand, payload.target)};
    case CHANGE_FILTER.TAG:
      return {...state, filteredTag: toggleTag(state.filteredTag, payload.target)};
    default:
      return state;
  }
};

export default mapReducer;
