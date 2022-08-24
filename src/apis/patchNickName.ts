import AxiosInstance from 'src/components/utils/Interceptor';

const patchNickName = async (nickName: string) => {
  const result = await AxiosInstance.patch('/api/v1/user/name', {name: nickName});
  return result.data;
};

export default patchNickName;
