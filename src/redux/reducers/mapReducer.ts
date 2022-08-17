import {Reducer} from 'redux';

import {
  CHANGE_BOOTH_DATA,
  CHANGE_BOTTOMSHEET_HEIGHT,
  CHANGE_FILTER,
  CHANGE_MAP_COORD,
  COMPLETE_SEARCH_KEYWORD,
  FOCUS_BOOTH,
  INPUT_SEARCH_KEYWORD,
} from '../types/MapActionType';

import toggleTag from 'src/utils/toggleTag';

const initialState = {
  focusBooth: null,
  searchKeyword: '',
  completeKeyword: '',
  mapCoord: {latitude: 0, longitude: 0},
  bottomSheetHeightIndex: 0,
  boothData: [],
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
    case COMPLETE_SEARCH_KEYWORD:
      return {...state, completeKeyword: payload.keyword};
    case CHANGE_MAP_COORD:
      return {...state, mapCoord: payload.coord};
    case CHANGE_BOTTOMSHEET_HEIGHT:
      return {...state, bottomSheetHeightIndex: payload.index};
    case CHANGE_BOOTH_DATA:
      return {
        ...state,
        boothData: payload.booth,
      };
    case CHANGE_FILTER.BRANDS:
      return {...state, filteredBrand: toggleTag(state.filteredBrand, payload.target)};
    case CHANGE_FILTER.TAG:
      return {...state, filteredTag: toggleTag(state.filteredTag, payload.target)};

    default:
      return state;
  }
};

export default mapReducer;
