import AxiosInstance from 'src/components/utils/Interceptor';

const deleteReview = async (reviewId: number) => {
  try {
    const result = await AxiosInstance.delete(`/api/v1/review/${reviewId}`);
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default deleteReview;
