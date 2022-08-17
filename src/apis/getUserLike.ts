import AxiosInstance from 'src/components/utils/Interceptor';

const getUserLike = async () => {
  try {
    const result = await AxiosInstance.get('/api/v1/user/like');
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getUserLike;
