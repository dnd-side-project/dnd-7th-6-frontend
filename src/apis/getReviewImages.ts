import AxiosInstance from 'src/components/utils/Interceptor';
import getApiServer from 'src/utils/getApiServer';

interface Parameter {
  page?: number;
  pageSize?: number;
  photoBoothId: number;
}

const getReviewImages = async ({page = 0, pageSize = 10, photoBoothId}: Parameter) => {
  try {
    const params = `photoBoothId=${photoBoothId}&page=${page}&pageSize=${pageSize}`;
    const result = await AxiosInstance.get(`${getApiServer}/api/v1/review/images?${params}`);

    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getReviewImages;
