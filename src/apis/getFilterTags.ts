import axios from 'axios';

import getApiServer from 'src/utils/getApiServer';

const getFilterTags = async () => {
  const url = `${getApiServer}/api/v1/post/filter`;
  const response = await axios.get(url);
  return response.data;
};
export default getFilterTags;
