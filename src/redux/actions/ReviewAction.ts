import {
  ADD_DELETE_IMAGE,
  ADD_IMAGE,
  ADD_STORE_DESCRIPTION,
  CHANGE_DELETE_IMAGE,
  CHANGE_STARS,
  CHANGE_TAGS,
  CHANGE_TAG_DATA,
  CLEAR_DATA,
  SHOW_PAUSE_MODAL,
  START_UPDATE,
} from '../types/ReviewActionType';

import {Review} from 'src/types';

export const changeStars = (star: number) => ({
  type: CHANGE_STARS,
  payload: {star},
});

export const changeTagData = (tagData: string[]) => ({
  type: CHANGE_TAG_DATA,
  payload: {tagData},
});

export const addImage = (image: {uri: string; name: string; type: string}[]) => ({
  type: ADD_IMAGE,
  payload: {image},
});

export const addStoreDescription = (text: string) => ({
  type: ADD_STORE_DESCRIPTION,
  payload: {text},
});

export const clearData = () => ({
  type: CLEAR_DATA,
});

export const showPauseModal = (isModal: boolean) => ({
  type: SHOW_PAUSE_MODAL,
  payload: {isModal},
});

export const changeSpecificTags = (target: number) => ({
  type: CHANGE_TAGS.SPECIFIC,
  payload: {target},
});

export const changeResultTags = (target: number) => ({
  type: CHANGE_TAGS.RESULT,
  payload: {target},
});

export const startUpdate = (review: Review) => ({
  type: START_UPDATE,
  payload: {review},
});

export const changeDeleteImage = (deleteImageIdList: number[]) => ({
  type: CHANGE_DELETE_IMAGE,
  payload: {deleteImageIdList},
});

export const addDeleteImage = (deleteImageId?: number) => ({
  type: ADD_DELETE_IMAGE,
  payload: {deleteImageId},
});
