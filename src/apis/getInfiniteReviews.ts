import axios from 'axios';

import getApiServer from 'src/utils/getApiServer';

interface Parameter {
  photoBoothId: number;
  page: number;
  pageSize?: number;
}

const getInfiniteReviews = async ({photoBoothId, page, pageSize = 5}: Parameter) => {
  try {
    const params = `photoBoothId=${photoBoothId}&page=${page}&pageSize=${pageSize}`;
    const result = await axios.get(`${getApiServer}/api/v1/review?${params}`);

    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getInfiniteReviews;
