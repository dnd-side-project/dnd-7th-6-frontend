import AxiosInstance from 'src/components/utils/Interceptor';

const getReviewTag = async () => {
  try {
    const result = await AxiosInstance.get('/api/v1/review/form');
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getReviewTag;
