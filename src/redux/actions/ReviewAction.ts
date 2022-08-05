import {CHANGE_STARS} from '../types/ReviewActionType';

export const changeStars = (star: number) => ({
  type: CHANGE_STARS,
  payload: {star},
});
