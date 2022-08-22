import AxiosInstance from 'src/components/utils/Interceptor';

const getUser = async (token?: string) => {
  try {
    const result = await AxiosInstance.get('/api/v1/user', {
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {},
    });
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getUser;
