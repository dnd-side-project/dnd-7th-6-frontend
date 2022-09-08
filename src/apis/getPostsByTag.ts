import AxiosInstance from 'src/components/utils/Interceptor';

interface Parameter {
  accessToken?: string;
  page?: number;
  pageSize?: number;
  order: string;
  tagIdSet: number[];
}

const getPostsByTag = async ({
  page = 0,
  pageSize = 10,
  tagIdSet,
  order = 'popular',
  accessToken,
}: Parameter) => {
  try {
    const url = '/api/v1/post/recommendation?';
    const params = `page=${page}&pageSize=${pageSize}&order=${order}&tagIdSet=${tagIdSet.join(
      ',',
    )}`;
    const getResponse = () => {
      if (accessToken) {
        return AxiosInstance.get(url + params, {
          headers: {
            Authorization: accessToken,
          },
        });
      } else {
        return AxiosInstance.get(url + params);
      }
    };
    const response = await getResponse();

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getPostsByTag;
