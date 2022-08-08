import axios from 'axios';

import getApiServer from 'src/utils/getApiServer';

const getPostsByTag = async (tagIdSet: number[]) => {
  const url = `${getApiServer}/api/v1/post/recommendation?`;
  const params = `tagIdSet=${tagIdSet.join(',')}`;
  const response = await axios.get(url + params);

  return response.data;
};

export default getPostsByTag;
