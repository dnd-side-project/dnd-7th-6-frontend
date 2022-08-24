import AxiosInstance from 'src/components/utils/Interceptor';

const mutatePhotoBoothLike = async (id: number) => {
  try {
    const result = await AxiosInstance.post(`/api/v1/photo-booth/${id}/like`);
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default mutatePhotoBoothLike;
