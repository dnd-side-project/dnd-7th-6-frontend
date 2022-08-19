import AxiosInstance from 'src/components/utils/Interceptor';
import getApiServer from 'src/utils/getApiServer';

const getPost = async (id: number) => {
  try {
    const url = `${getApiServer}/api/v1/post/${id}`;
    const result = await AxiosInstance.get(url);
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getPost;
