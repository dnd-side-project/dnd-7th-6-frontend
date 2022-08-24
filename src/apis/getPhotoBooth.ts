import AxiosInstance from 'src/components/utils/Interceptor';

const getPhotoBooth = async (id: number) => {
  try {
    const result = await AxiosInstance.get(`/api/v1/photo-booth/${id}`);
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getPhotoBooth;
