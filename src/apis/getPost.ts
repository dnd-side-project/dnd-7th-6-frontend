import axios from 'axios';

import getApiServer from 'src/utils/getApiServer';

const getPost = async () => {
  const url = `${getApiServer}/api/v1/post/1`;
  const result = await axios.get(url);
  return result.data;
};

export default getPost;
