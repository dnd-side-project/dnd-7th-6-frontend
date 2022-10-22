import AxiosInstance from 'src/components/utils/Interceptor';

const putAgreeTerm = async (email: string) => {
  AxiosInstance.patch('/api/v1/agree-term', {email});
};

export default putAgreeTerm;
