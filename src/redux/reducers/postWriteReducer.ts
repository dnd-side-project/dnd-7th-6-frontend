import {Reducer} from 'redux';

import {CHANGE_SCREEN} from '../types/PostActionType';
import {
  ADD_POST_WRITE_IMAGE,
  INPUT_POST_CONTENTS,
  TOGGLE_TAG_CHIP,
} from '../types/PostWriteActionType';

const initialState = {
  screenIndex: 0,
  contents: '',
  image: {uri: ''},
  tags: [{}, {}, {}, {}, {}, {}],
};

const postWriteReducer: Reducer = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case INPUT_POST_CONTENTS:
      return {...state, contents: payload.text};
    case ADD_POST_WRITE_IMAGE:
      return {...state, image: {uri: payload.image}};
    case TOGGLE_TAG_CHIP:
      const nextState = [...state.tags];
      nextState[payload.index] = {[payload.tagId]: !nextState[payload.index][payload.tagId]};
      return {...state, tags: nextState};
    case CHANGE_SCREEN:
      return {...state, screenIndex: payload.target};
    default:
      return state;
  }
};

export default postWriteReducer;
