import {CHANGE_SCREEN} from '../types/PostActionType';
import {
  ADD_DIRECT_TAG,
  ADD_POST_WRITE_IMAGE,
  CLEAR_POST_WRITE,
  INPUT_POST_CONTENTS,
  TOGGLE_TAG_CHIP,
} from '../types/PostWriteActionType';

export const inputPostContents = (text: string) => ({
  type: INPUT_POST_CONTENTS,
  payload: {text},
});

export const addPostWriteImage = (image: string) => ({
  type: ADD_POST_WRITE_IMAGE,
  payload: {image},
});

export const toggleTagChip = (index: number, tagId: number) => ({
  type: TOGGLE_TAG_CHIP,
  payload: {index, tagId},
});

export const changeScreen = (target: number) => ({
  type: CHANGE_SCREEN,
  payload: {target},
});

export const addDirectTag = (target: string) => ({
  type: ADD_DIRECT_TAG,
  payload: {target},
});

export const clearPostWrite = () => ({
  type: CLEAR_POST_WRITE,
});
