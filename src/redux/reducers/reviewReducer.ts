import {Reducer} from 'redux';

import {
  ADD_DELETE_IMAGE,
  ADD_IMAGE,
  ADD_STORE_DESCRIPTION,
  CHANGE_DELETE_IMAGE,
  CHANGE_STARS,
  CHANGE_TAGS,
  CHANGE_TAG_DATA,
  CLEAR_DATA,
  SHOW_PAUSE_MODAL,
  START_UPDATE,
} from '../types/ReviewActionType';

import {Review} from 'src/types';
import toggleTag from 'src/utils/toggleTag';

const initialState = {
  currentStar: 0,
  tagData: [],
  imageData: [],
  deleteImageIdList: [],
  storeDescription: '',
  pauseModal: false,
  specificTags: {},
  specificNext: false,
  resultTags: {},
  resultNext: false,
  isUpdateMode: false,
  reviewId: -1,
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
    case START_UPDATE:
      const {review}: {review: Review} = payload;
      return {
        ...state,
        storeDescription: review.content,
        specificTags: review.reviewTagSet
          .filter(({tag}) => tag.tagType === 'BOOTH_CONDITION')
          .reduce((tagSet, {tag}) => ({...tagSet, [tag.id]: true}), {}),
        resultTags: review.reviewTagSet
          .filter(({tag}) => tag.tagType === 'PHOTO_CONDITION')
          .reduce((tagSet, {tag}) => ({...tagSet, [tag.id]: true}), {}),
        specificNext: true,
        resultNext: true,
        currentStar: review.starScore,
        tagData: review.reviewTagSet
          .filter(({tag}) => tag.tagType === 'CUSTOM')
          .map(({tag}) => tag.title),
        imageData: review.reviewImageSet.map(image => ({
          id: image.id,
          uri: image.imageUrl,
          name: Date.now(),
          type: 'image/jpeg',
        })),
        isUpdateMode: true,
        reviewId: review.id,
      };
    case ADD_DELETE_IMAGE:
      if (!payload.deleteImageId) {
        return {...state};
      }
      return {
        ...state,
        deleteImageIdList: [
          ...state.deleteImageIdList.filter((imageId: number) => payload.deleteImageId !== imageId),
          payload.deleteImageId,
        ],
      };
    case CHANGE_DELETE_IMAGE:
      if (payload.deleteImageIdList.length <= 0) {
        return {...state};
      }
      return {...state, deleteImageIdList: payload.deleteImageIdList};
    case CLEAR_DATA:
      return {...initialState};
    default:
      return state;
  }
};

export default reviewReducer;
