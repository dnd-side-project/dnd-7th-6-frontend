import axios from 'axios';
import {Alert} from 'react-native';

import getApiServer from 'src/utils/getApiServer';

interface LoginParam {
  email: string;
  providerId: string;
  provider: 'KAKAO' | 'GOOGLE' | 'NAVER';
}

const login = async (loginBridge: () => Promise<LoginParam>) => {
  try {
    const {email, provider, providerId} = await loginBridge();
    const params = `email=${email}&providerId=${providerId}&provider=${provider}`;
    const result = await axios.get(`${getApiServer}/api/v1/user/login?${params}`);
    return result.data;
  } catch (error) {
    //@ts-ignore
    if (error.response.data.code === -100010) {
      Alert.alert('탈퇴된 회원이거나 접근 할 수 없는 계정입니다.');
    }
    return Promise.reject(error);
  }
};

export default login;
