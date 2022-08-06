import {
  CHANGE_FILTER,
  CHANGE_FOCUS,
  CLOSE_FILTER_SHEET,
  OPEN_FILTER_SHEET,
} from '../types/PostActionType';

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
