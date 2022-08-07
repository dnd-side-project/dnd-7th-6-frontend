import {Reducer} from 'redux';

import {
  CHANGE_FILTER,
  CHANGE_FOCUS,
  CLEAR_FILTER,
  CLOSE_FILTER_SHEET,
  OPEN_FILTER_SHEET,
} from '../types/PostActionType';

import toggleTag from 'src/utils/toggleTag';

const filterState = {
  filteredBrand: {},
  filteredHeadcount: {
    number: {},
    relation: {},
  },
  filteredPose: {
    emotion: {},
    situation: {},
  },
  filteredFrame: {},
};
const initialState = {
  isOpenFilterSheet: false,
  focusedFilter: 0,
  ...filterState,
};

const postReducer: Reducer = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case OPEN_FILTER_SHEET:
      return {...state, isOpenFilterSheet: true};
    case CLOSE_FILTER_SHEET:
      return {...state, isOpenFilterSheet: false};
    case CHANGE_FOCUS:
      return {...state, focusedFilter: payload.focus};
    case CHANGE_FILTER.BRAND:
      return {...state, filteredBrand: toggleTag(state.filteredBrand, payload.target)};
    case CHANGE_FILTER.FRAME:
      return {...state, filteredFrame: toggleTag(state.filteredFrame, payload.target)};
    case CHANGE_FILTER.HEADCOUNT.NUMBER:
      return {
        ...state,
        filteredHeadcount: {
          ...state.filteredHeadcount,
          number: toggleTag(state.filteredHeadcount.number, payload.target),
        },
      };
    case CHANGE_FILTER.HEADCOUNT.RELATION:
      return {
        ...state,
        filteredHeadcount: {
          ...state.filteredHeadcount,
          relation: toggleTag(state.filteredHeadcount.relation, payload.target),
        },
      };
    case CHANGE_FILTER.POSE.EMOTION:
      return {
        ...state,
        filteredPose: {
          ...state.filteredPose,
          emotion: toggleTag(state.filteredPose.emotion, payload.target),
        },
      };
    case CHANGE_FILTER.POSE.SITUATION:
      return {
        ...state,
        filteredPose: {
          ...state.filteredPose,
          situation: toggleTag(state.filteredPose.situation, payload.target),
        },
      };
    case CLEAR_FILTER.ALL:
      return {
        ...state,
        ...filterState,
      };
    case CLEAR_FILTER.BRAND:
      return {
        ...state,
        filteredBrand: {},
      };
    case CLEAR_FILTER.HEADCOUNT:
      return {
        ...state,
        filteredHeadcount: {...filterState.filteredHeadcount},
      };
    case CLEAR_FILTER.POSE:
      return {
        ...state,
        filteredPose: {...filterState.filteredPose},
      };
    case CLEAR_FILTER.FRAME:
      return {
        ...state,
        filteredFrame: {},
      };
    default:
      return state;
  }
};

export default postReducer;
