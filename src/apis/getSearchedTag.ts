import axios from 'axios';

import getApiServer from 'src/utils/getApiServer';

const getSearchedTag = async (searchingWord: string) => {
  if (!searchingWord) {
    return;
  }
  const url = `${getApiServer}/api/v1/tag/keyword-search?keyword=${searchingWord}&tagType=CUSTOM`;
  const result = await axios.get(url);
  return result.data;
};

export default getSearchedTag;
