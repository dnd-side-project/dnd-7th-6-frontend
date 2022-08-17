import AxiosInstance from 'src/components/utils/Interceptor';

const getUser = async () => {
  try {
    const result = await AxiosInstance.get('/api/v1/user');
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getUser;
