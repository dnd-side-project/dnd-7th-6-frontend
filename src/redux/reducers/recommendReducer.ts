import {Reducer} from 'redux';

import {SET_CUSTOM_TAG_KEYWORD} from '../types/RecommendActionType';

const initialState = {
  tagKeyword: '',
};

const recommendReducer: Reducer = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case SET_CUSTOM_TAG_KEYWORD:
      return {...state, tagKeyword: payload.keyword};
    default:
      return state;
  }
};

export default recommendReducer;
