import {CHANGE_SCREEN} from '../types/PostActionType';
import {
  ADD_DELETE_IMAGE,
  ADD_DIRECT_TAG,
  ADD_POST_WRITE_IMAGE,
  CHANGE_CUSTOM_TAG,
  CHANGE_MODIFY_MODE,
  CHANGE_SHARED_SCOPE,
  CLEAR_POST_WRITE,
  INPUT_POST_CONTENTS,
  START_MODIFY_POST,
  TOGGLE_TAG_CHIP,
} from '../types/PostWriteActionType';

import {FormImage, Post} from 'src/types';

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

export const startModifyPost = (post: Post) => {
  const {content, postImageSet, postTagSet, id, isPublic} = post;
  const tags: {[key: number]: boolean}[] = [{}, {}, {}, {}, {}, {}, {}];
  const customTags: {id: number; name: string}[] = [];
  const image = {
    id: postImageSet[0].id,
    uri: postImageSet[0].imageUrl,
    type: 'image/jpeg',
    name: `${Date.now()}.jpg`,
  };

  postTagSet.forEach(({tag}) => {
    if (tag.tagType === 'BRAND') {
      tags[0][tag.id] = true;
    } else if (tag.tagType === 'HEAD_COUNT') {
      tags[1][tag.id] = true;
    } else if (tag.tagType === 'RELATION') {
      tags[2][tag.id] = true;
    } else if (tag.tagType === 'CONCEPT') {
      tags[3][tag.id] = true;
    } else if (tag.tagType === 'SITUATION') {
      tags[4][tag.id] = true;
    } else if (tag.tagType === 'FRAME') {
      tags[5][tag.id] = true;
    } else if (tag.tagType === 'CUSTOM') {
      tags[6][tag.id] = true;
      customTags.push({id: tag.id, name: tag.title});
    }
  });

  return {
    type: START_MODIFY_POST,
    payload: {content, image, tags, customTags, postId: id, isPublic},
  };
};

export const addDeleteImage = (imageId: number) => ({
  type: ADD_DELETE_IMAGE,
  payload: {imageId},
});
