import {CHANGE_SCREEN} from '../types/PostActionType';
import {
  ADD_DIRECT_TAG,
  ADD_POST_WRITE_IMAGE,
  CHANGE_CUSTOM_TAG,
  CHANGE_MODIFY_MODE,
  CHANGE_SHARED_SCOPE,
  CLEAR_POST_WRITE,
  INPUT_POST_CONTENTS,
  TOGGLE_TAG_CHIP,
} from '../types/PostWriteActionType';

import {FormImage} from 'src/types';

export const inputPostContents = (text: string) => ({
  type: INPUT_POST_CONTENTS,
  payload: {text},
});

export const addPostWriteImage = (image: FormImage) => ({
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

export const changeSharedScope = (sharedScope: boolean) => ({
  type: CHANGE_SHARED_SCOPE,
  payload: {sharedScope},
});

export const changeModifyMode = (modifyMode: boolean) => ({
  type: CHANGE_MODIFY_MODE,
  payload: {modifyMode},
});

export const changeCustomTag = (customTags: string[]) => ({
  type: CHANGE_CUSTOM_TAG,
  payload: {customTags},
});
