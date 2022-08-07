import {Reducer} from 'redux';

import {
  ADD_IMAGE,
  ADD_STORE_DESCRIPTION,
  CHANGE_STARS,
  CLEAR_DATA,
  SHOW_PAUSE_MODAL,
} from '../types/ReviewActionType';

const initialState = {
  currentStar: 0,
  imageData: [],
  storeDescription: '',
  pauseModal: false,
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
    case SHOW_PAUSE_MODAL:
      return {...state, pauseModal: payload.isModal};
    case CLEAR_DATA:
      return {...initialState};
    default:
      return state;
  }
};

export default reviewReducer;
