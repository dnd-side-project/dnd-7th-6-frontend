import AxiosInstance from 'src/components/utils/Interceptor';

const getUserNameValid = async (name: string) => {
  const result = await AxiosInstance.get(`/api/v1/user/name-valid?name=${name}`).catch(error => {
    if (error.response.status === 500) {
      return error.response.status;
    }
  });
  return result;
};

export default getUserNameValid;
