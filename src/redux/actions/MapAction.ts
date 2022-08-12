import {type Coord} from 'react-native-nmap';

import {
  CHANGE_BOOTH_DATA,
  CHANGE_BOTTOMSHEET_HEIGHT,
  CHANGE_FILTER,
  CHANGE_MAP_COORD,
  FOCUS_BOOTH,
  INPUT_SEARCH_KEYWORD,
} from '../types/MapActionType';

export const focusBooth = (booth: any) => ({
  type: FOCUS_BOOTH,
  payload: {booth},
});

export const inputSearchKeyword = (keyword: string) => ({
  type: INPUT_SEARCH_KEYWORD,
  payload: {keyword},
});

export const changeMapCoord = (coord: Coord) => ({
  type: CHANGE_MAP_COORD,
  payload: {coord},
});

export const changeBottomSheetHeight = (index: number) => ({
  type: CHANGE_BOTTOMSHEET_HEIGHT,
  payload: {index},
});

export const changeBoothData = (booth: any) => ({
  type: CHANGE_BOOTH_DATA,
  payload: {booth},
});

export const changeFilteredBrandonMap = (target: number) => ({
  type: CHANGE_FILTER.BRANDS,
  payload: {target},
});

export const changeFilteredTagonMap = (target: number) => ({
  type: CHANGE_FILTER.TAG,
  payload: {target},
});
