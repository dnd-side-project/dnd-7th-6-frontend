import {login, getProfile, KakaoProfile} from '@react-native-seoul/kakao-login';

interface LoginParam {
  email: string;
  providerId: string;
  provider: 'KAKAO' | 'GOOGLE' | 'NAVER';
}

const kakaoLoginBridge = async (): Promise<LoginParam> => {
  await login();
  const profile = (await getProfile()) as KakaoProfile;
  return {
    email: profile.email,
    providerId: profile.id,
    provider: 'KAKAO',
  };
};

export default kakaoLoginBridge;
