import AxiosInstance from 'src/components/utils/Interceptor';

const getUserLikeImage = async () => {
  try {
    const result = await AxiosInstance.get('/api/v1/user/like/image');
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getUserLikeImage;
