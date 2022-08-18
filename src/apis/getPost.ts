import axios from 'axios';

import getApiServer from 'src/utils/getApiServer';

const getPost = async (id: number) => {
  try {
    const url = `${getApiServer}/api/v1/post/${id}`;
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getPost;
