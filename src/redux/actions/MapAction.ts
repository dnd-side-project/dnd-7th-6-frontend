import {FOCUS_BOOTH} from '../types/MapActionType';

import {BoothSummary} from 'src/types';

export const focusBooth = (booth: BoothSummary) => ({
  type: FOCUS_BOOTH,
  payload: {booth},
});
