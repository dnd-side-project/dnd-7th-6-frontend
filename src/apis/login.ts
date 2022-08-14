import axios from 'axios';

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
    console.error(error);
  }
};

export default login;
