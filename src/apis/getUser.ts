import AxiosInstance from 'src/components/utils/Interceptor';
import getApiServer from 'src/utils/getApiServer';

const getUser = async () => {
  try {
    const result = await AxiosInstance.get(`${getApiServer}/api/v1/user`);
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getUser;
