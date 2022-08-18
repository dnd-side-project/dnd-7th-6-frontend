import AxiosInstance from 'src/components/utils/Interceptor';

interface Parameter {
  page?: number;
  pageSize?: number;
  order: string;
  tagIdSet: number[];
}

const getPostsByTag = async ({page = 0, pageSize = 10, tagIdSet, order = 'popular'}: Parameter) => {
  try {
    const url = tagIdSet.length <= 0 ? '/api/v1/post?' : '/api/v1/post/recommendation?';
    const params = `page=${page}&pageSize=${pageSize}&order=${order}&tagIdSet=${tagIdSet.join(
      ',',
    )}`;
    const response = await AxiosInstance.get(url + params);

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getPostsByTag;
