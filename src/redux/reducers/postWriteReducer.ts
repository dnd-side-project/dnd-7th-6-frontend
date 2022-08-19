import {Reducer} from 'redux';

import {CHANGE_SCREEN} from '../types/PostActionType';
import {
  ADD_DELETE_IMAGE,
  ADD_POST_WRITE_IMAGE,
  CHANGE_CUSTOM_TAG,
  CHANGE_MODIFY_MODE,
  CHANGE_SHARED_SCOPE,
  CLEAR_POST_WRITE,
  INPUT_POST_CONTENTS,
  START_MODIFY_POST,
  TOGGLE_TAG_CHIP,
} from '../types/PostWriteActionType';

const initialState = {
  screenIndex: 0,
  isModifyMode: false,
  isPostModifyMode: false,
  modifyPostId: -1,
  deleteImageIdList: [],
  contents: '',
  image: {uri: ''},
  tags: [{}, {}, {}, {}, {}, {}, {}],
  customTags: [],
  isPublic: true,
};

const postWriteReducer: Reducer = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case INPUT_POST_CONTENTS:
      return {...state, contents: payload.text};
    case ADD_POST_WRITE_IMAGE:
      return {...state, image: {...payload.image}};
    case TOGGLE_TAG_CHIP:
      const nextState = [...state.tags];
      nextState[payload.index] = {
        ...state.tags[payload.index],
        [payload.tagId]: !nextState[payload.index][payload.tagId],
      };
      return {...state, tags: nextState};
    case CHANGE_SCREEN:
      return {...state, screenIndex: payload.target};
    case CLEAR_POST_WRITE:
      return {...initialState};
    case CHANGE_SHARED_SCOPE:
      return {...state, isPublic: payload.sharedScope};
    case CHANGE_MODIFY_MODE:
      return {...state, isModifyMode: payload.modifyMode};
    case CHANGE_CUSTOM_TAG:
      return {...state, customTags: [...payload.customTags]};
    case START_MODIFY_POST:
      const {content, image, tags, customTags, postId, isPublic} = payload;
      return {
        ...state,
        contents: content,
        image: {...image},
        tags,
        isPostModifyMode: true,
        customTags,
        isPublic,
        modifyPostId: postId,
      };
    case ADD_DELETE_IMAGE:
      return {...state, deleteImageList: [payload.imageId]};
    default:
      return state;
  }
};

export default postWriteReducer;
