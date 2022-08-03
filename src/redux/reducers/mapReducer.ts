import {Reducer} from 'redux';

import {FOCUS_BOOTH} from '../types/MapActionType';

const initialState = {
  focusBooth: null,
};

const mapReducer: Reducer = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case FOCUS_BOOTH:
      return {...state, focusBooth: payload.booth};
    default:
      return state;
  }
};

export default mapReducer;
