import {Reducer} from 'redux';

import {CHANGE_STARS} from '../types/ReviewActionType';

const initialState = {
  currentStar: 0,
};

const reviewReducer: Reducer = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case CHANGE_STARS:
      return {...state, currentStar: payload.star};
    default:
      return state;
  }
};

export default reviewReducer;
