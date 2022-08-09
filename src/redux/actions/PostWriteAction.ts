import {
  ADD_POST_WRITE_IMAGE,
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
