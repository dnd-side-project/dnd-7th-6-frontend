import {appleAuth} from '@invertase/react-native-apple-authentication';
import {Alert} from 'react-native';

interface LoginParam {
  email?: string | null;
  providerId: string;
  provider: 'KAKAO' | 'GOOGLE' | 'APPLE';
}

const appleLoginBridge = async (): Promise<LoginParam> => {
  try {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });
    if (appleAuthRequestResponse.email) {
      return {
        email: appleAuthRequestResponse.email,
        providerId: appleAuthRequestResponse.user,
        provider: 'APPLE',
      };
    } else {
      return {
        providerId: appleAuthRequestResponse.user,
        provider: 'APPLE',
      };
    }
  } catch (error: any) {
    Alert.alert('로그인 도중 오류가 발생하였습니다.');
    return Promise.reject(error);
  }
};

export default appleLoginBridge;
