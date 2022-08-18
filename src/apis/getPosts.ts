import AxiosInstance from 'src/components/utils/Interceptor';
import getApiServer from 'src/utils/getApiServer';

interface Parameter {
  page?: number;
  pageSize?: number;
  userId?: string;
  order: string;
}

const getPosts = async ({page = 0, pageSize = 10, order, userId}: Parameter) => {
  try {
    const url = `${getApiServer}/api/v1/post?`;
    const params =
      `page=${page}&pageSize=${pageSize}&order=${order}` + (userId ? `&userId=${userId}` : '');
    const response = await AxiosInstance.get(url + params);

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getPosts;
