import {
  CHANGE_FILTER,
  CHANGE_FOCUS,
  CLEAR_FILTER,
  CLOSE_FILTER_SHEET,
  OPEN_FILTER_SHEET,
} from '../types/PostActionType';

import {ALL, FILTER} from 'src/constants/filters';

export const openFilterSheet = () => ({
  type: OPEN_FILTER_SHEET,
});

export const closeFilterSheet = () => ({
  type: CLOSE_FILTER_SHEET,
});

export const changeFocus = (focus: number) => ({
  type: CHANGE_FOCUS,
  payload: {focus},
});

export const changeFilteredBrand = (target: number) => ({
  type: CHANGE_FILTER.BRAND,
  payload: {target},
});

export const changeFilteredHeadcountNumber = (target: number) => ({
  type: CHANGE_FILTER.HEADCOUNT.NUMBER,
  payload: {target},
});

export const changeFilteredHeadcountRelation = (target: number) => ({
  type: CHANGE_FILTER.HEADCOUNT.RELATION,
  payload: {target},
});

export const changeFilteredPoseEmotion = (target: number) => ({
  type: CHANGE_FILTER.POSE.EMOTION,
  payload: {target},
});

export const changeFilteredPoseSituation = (target: number) => ({
  type: CHANGE_FILTER.POSE.SITUATION,
  payload: {target},
});

export const changeFilteredFrame = (target: number) => ({
  type: CHANGE_FILTER.FRAME,
  payload: {target},
});

export const clearFilter = (type?: number) => {
  switch (type) {
    case ALL:
      return {type: CLEAR_FILTER.ALL};
    case FILTER.BRAND:
      return {type: CLEAR_FILTER.BRAND};
    case FILTER.HEADCOUNT:
      return {type: CLEAR_FILTER.HEADCOUNT};
    case FILTER.POSE:
      return {type: CLEAR_FILTER.POSE};
    case FILTER.FRAME:
      return {type: CLEAR_FILTER.FRAME};
    default:
      return {type: CLEAR_FILTER.ALL};
  }
};
