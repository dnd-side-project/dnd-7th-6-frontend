import AxiosInstance from 'src/components/utils/Interceptor';

const getUserList = async () => {
  try {
    const result = await AxiosInstance.get('/api/v1/user/list');
    if (result === undefined) {
      return;
    }
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getUserList;
