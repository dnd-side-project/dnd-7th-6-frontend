import {SET_CUSTOM_TAG_KEYWORD} from '../types/RecommendActionType';

export const setCustomTagKeyword = (keyword: string) => ({
  type: SET_CUSTOM_TAG_KEYWORD,
  payload: {keyword},
});
