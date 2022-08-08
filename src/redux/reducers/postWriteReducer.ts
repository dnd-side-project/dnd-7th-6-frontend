import {Reducer} from 'redux';

import {ADD_POST_WRITE_IMAGE, INPUT_POST_CONTENTS} from '../types/PostWriteActionType';

const initialState = {
  contents: '',
  image: {uri: ''},
};

const postWriteReducer: Reducer = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case INPUT_POST_CONTENTS:
      return {...state, contents: payload.text};
    case ADD_POST_WRITE_IMAGE:
      return {...state, image: {uri: payload.image}};
    default:
      return state;
  }
};

export default postWriteReducer;
