import axios from 'axios';

import getApiServer from 'src/utils/getApiServer';

interface Parameter {
  page?: number;
  pageSize?: number;
  order: string;
  tagIdSet: number[];
}

const getPostsByTag = async ({page = 0, pageSize = 10, tagIdSet, order}: Parameter) => {
  try {
    const url = `${getApiServer}/api/v1/post/recommendation?`;
    const params = `page=${page}&pageSize=${pageSize}&order=${order}&tagIdSet=${tagIdSet.join(
      ',',
    )}`;
    const response = await axios.get(url + params);

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getPostsByTag;
