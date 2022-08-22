import {
  ADD_IMAGE,
  ADD_STORE_DESCRIPTION,
  CHANGE_STARS,
  CHANGE_TAGS,
  CHANGE_TAG_DATA,
  CLEAR_DATA,
  SHOW_PAUSE_MODAL,
} from '../types/ReviewActionType';

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
