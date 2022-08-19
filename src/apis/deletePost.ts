import AxiosInstance from 'src/components/utils/Interceptor';

const deletePost = async (postId: number) => {
  try {
    const result = await AxiosInstance.delete(`/api/v1/post/${postId}`);
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default deletePost;
