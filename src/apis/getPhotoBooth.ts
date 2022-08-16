import axios from 'axios';

import getApiServer from 'src/utils/getApiServer';

const getPhotoBooth = async (id: number) => {
  try {
    const result = await axios.get(`${getApiServer}/api/v1/photo-booth/${id}`);
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getPhotoBooth;
