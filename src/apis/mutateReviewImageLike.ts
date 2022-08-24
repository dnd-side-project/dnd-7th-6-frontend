import AxiosInstance from 'src/components/utils/Interceptor';

const mutateReviewImageLike = async (id: number) => {
  try {
    const result = await AxiosInstance.post(`/api/v1/review/image/${id}/like`);
    return result.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default mutateReviewImageLike;
