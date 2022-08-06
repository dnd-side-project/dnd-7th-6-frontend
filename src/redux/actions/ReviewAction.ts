import {
  ADD_IMAGE,
  ADD_STORE_DESCRIPTION,
  CHANGE_STARS,
  CLEAR_DATA,
} from '../types/ReviewActionType';

export const changeStars = (star: number) => ({
  type: CHANGE_STARS,
  payload: {star},
});

export const addImage = (image: {uri: string}[]) => ({
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
