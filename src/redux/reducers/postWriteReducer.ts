import {Reducer} from 'redux';

import {INPUT_POST_CONTENTS} from '../types/PostWriteActionType';

const initialState = {
  contents: '',
};

const postWriteReducer: Reducer = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case INPUT_POST_CONTENTS:
      return {...state, contents: payload.text};
    default:
      return state;
  }
};

export default postWriteReducer;
