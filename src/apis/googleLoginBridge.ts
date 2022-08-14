import {GoogleSignin, statusCodes} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';
import {Config} from 'react-native-config';

interface LoginParam {
  email: string;
  providerId: string;
  provider: 'KAKAO' | 'GOOGLE' | 'NAVER';
}

const googleLoginBridge = async (): Promise<LoginParam> => {
  await GoogleSignin.configure({
    iosClientId: Config.IOS_GOOGLE_API_KEY,
  });
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const userInfo = await GoogleSignin.signIn();
    return {
      email: userInfo.user.email,
      providerId: userInfo.user.id,
      provider: 'GOOGLE',
    };
  } catch (error: any) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      //로그인 취소
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // 로그인 중
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    } else {
      Alert.alert('로그인 도중 오류가 발생했습니다.');
    }
    return Promise.reject(error);
  }
};

export default googleLoginBridge;
