import AxiosInstance from 'src/components/utils/Interceptor';

const getUserLikeBooth = async () => {
  try {
    const result = await AxiosInstance.get('/api/v1/user/like/photo-booth');
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getUserLikeBooth;
