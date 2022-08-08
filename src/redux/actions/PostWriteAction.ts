import {ADD_POST_WRITE_IMAGE, INPUT_POST_CONTENTS} from '../types/PostWriteActionType';

export const inputPostContents = (text: string) => ({
  type: INPUT_POST_CONTENTS,
  payload: {text},
});

export const addPostWriteImage = (image: string) => ({
  type: ADD_POST_WRITE_IMAGE,
  payload: {image},
});
