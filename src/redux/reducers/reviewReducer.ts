import {Reducer} from 'redux';

import {
  ADD_IMAGE,
  ADD_STORE_DESCRIPTION,
  CHANGE_STARS,
  CLEAR_DATA,
} from '../types/ReviewActionType';

const initialState = {
  currentStar: 0,
  imageData: [],
  storeDescription: '',
};

const reviewReducer: Reducer = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case CHANGE_STARS:
      return {...state, currentStar: payload.star};
    case ADD_IMAGE:
      return {...state, imageData: payload.image};
    case ADD_STORE_DESCRIPTION:
      return {...state, storeDescription: payload.text};
    case CLEAR_DATA:
      return {...initialState};
    default:
      return state;
  }
};

export default reviewReducer;
