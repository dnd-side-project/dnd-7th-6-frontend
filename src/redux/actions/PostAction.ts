import {CLOSE_FILTER_SHEET, OPEN_FILTER_SHEET} from '../types/PostActionType';

export const openFilterSheet = () => ({
  type: OPEN_FILTER_SHEET,
});

export const closeFilterSheet = () => ({
  type: CLOSE_FILTER_SHEET,
});
