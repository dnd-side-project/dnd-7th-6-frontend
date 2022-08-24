import AxiosInstance from 'src/components/utils/Interceptor';

const mutatePostLike = async (id: number) => {
  try {
    const result = await AxiosInstance.post(`/api/v1/post/${id}/like`);
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default mutatePostLike;
