import axios from 'axios';

import getApiServer from 'src/utils/getApiServer';

const getReviewImages = async (photoBoothId: number) => {
  try {
    const params = `photoBoothId=${photoBoothId}`;
    const result = await axios.get(`${getApiServer}/api/v1/review/images?${params}`);

    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getReviewImages;
