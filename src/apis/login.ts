import axios from 'axios';
import {Alert} from 'react-native';

import getApiServer from 'src/utils/getApiServer';

interface LoginParam {
  email: string;
  providerId: string;
  provider: 'KAKAO' | 'GOOGLE' | 'NAVER';
}

const login = async (loginBridge: () => Promise<LoginParam>) => {
  const {email, provider, providerId} = await loginBridge().catch(error => Promise.reject(error));

  try {
    const params = `email=${email}&providerId=${providerId}&provider=${provider}`;
    const result = await axios.get(`${getApiServer}/api/v1/user/login?${params}`);
    return result.data;
  } catch (error) {
    const err = error as any;
    if (err.response.data.code === -100010) {
      Alert.alert(err.message);
    }
    if (err.response.data.code === -100015) {
      Alert.alert(err.message);
      err.email = email;
      throw err;
    }
    return Promise.reject(error);
  }
};

export default login;
