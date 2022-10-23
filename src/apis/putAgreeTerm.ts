import AxiosInstance from 'src/components/utils/Interceptor';

const putAgreeTerm = async (email: string) => {
  try {
    const response = await AxiosInstance.patch('/api/v1/agree-term', {email});
    const result = response.data;
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default putAgreeTerm;
