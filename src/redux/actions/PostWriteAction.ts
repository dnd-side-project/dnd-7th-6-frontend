import {INPUT_POST_CONTENTS} from '../types/PostWriteActionType';

export const inputPostContents = (text: string) => ({
  type: INPUT_POST_CONTENTS,
  payload: {text},
});
