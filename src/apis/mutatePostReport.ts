import AxiosInstance from 'src/components/utils/Interceptor';

const mutatePostReport = async (id: number) => {
  try {
    const result = await AxiosInstance.post(`/api/v1/post/${id}/report`);
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default mutatePostReport;
