import axios from 'axios';

import getApiServer from 'src/utils/getApiServer';

interface Parameter {
  page?: number;
  pageSize?: number;
  tagIdSet: number[];
  order: string;
}

/*
  page 파라미터 없을 시 전체 데이터 가져옴
*/
const getPosts = async ({page = 0, pageSize = 10, tagIdSet, order}: Parameter) => {
  const url = `${getApiServer}/api/v1/post/recommendation?`;
  const params = `page=${page}&pageSize=${pageSize}&tagIdSet=${tagIdSet.join(',')}&order=${order}`;
  const response = await axios.get(url + params);
  const result = response.data;

  return {
    result,
    nextPage: page + 1,
    isLast: false,
  };
};

export default getPosts;
