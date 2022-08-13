import {Reducer} from 'redux';

import {
  ADD_IMAGE,
  ADD_STORE_DESCRIPTION,
  CHANGE_STARS,
  CHANGE_TAGS,
  CHANGE_TAG_DATA,
  CLEAR_DATA,
  SHOW_PAUSE_MODAL,
} from '../types/ReviewActionType';

import toggleTag from 'src/utils/toggleTag';

const initialState = {
  currentStar: 0,
  imageData: [],
  storeDescription: '',
  pauseModal: false,
  specificTags: {},
  specificNext: false,
  resultTags: {},
  resultNext: false,
};

const reviewReducer: Reducer = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case CHANGE_STARS:
      return {...state, currentStar: payload.star};
    case CHANGE_TAG_DATA:
      return {...state, tagData: payload.tagData};
    case ADD_IMAGE:
      return {...state, imageData: payload.image};
    case ADD_STORE_DESCRIPTION:
      return {...state, storeDescription: payload.text};
    case SHOW_PAUSE_MODAL:
      return {...state, pauseModal: payload.isModal};
    case CHANGE_TAGS.SPECIFIC:
      const nextSpecificData = toggleTag(state.specificTags, payload.target);
      const specificLimiter: boolean[] = Object.values(nextSpecificData).filter(v => {
        if (v) {
          return v;
        }
      });
      if (specificLimiter.length > 4) {
        return {...state};
      }
      return {
        ...state,
        specificTags: toggleTag(state.specificTags, payload.target),
        specificNext: specificLimiter.length > 0 ? true : false,
      };
    case CHANGE_TAGS.RESULT:
      const nextResultData = toggleTag(state.resultTags, payload.target);
      const resultLimiter: boolean[] = Object.values(nextResultData).filter(v => {
        if (v) {
          return v;
        }
      });
      if (resultLimiter.length > 4) {
        return {...state};
      }
      return {
        ...state,
        resultTags: toggleTag(state.resultTags, payload.target),
        resultNext: resultLimiter.length > 0 ? true : false,
      };
    case CLEAR_DATA:
      return {...initialState};
    default:
      return state;
  }
};

export default reviewReducer;
