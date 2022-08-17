import AxiosInstance from 'src/components/utils/Interceptor';

const deleteUser = async () => {
  const result = await AxiosInstance.delete('/api/v1/user');
  return result;
};

export default deleteUser;
