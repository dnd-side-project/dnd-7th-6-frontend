import {Alert, Linking, Platform} from 'react-native';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';

const requestLocationPermission = async () => {
  try {
    if (Platform.OS === 'ios') {
      const permission = await check(PERMISSIONS.IOS.LOCATION_ALWAYS);
      if (permission === RESULTS.GRANTED) {
        return permission;
      }
      if (permission === RESULTS.BLOCKED || RESULTS.DENIED) {
        Alert.alert(
          'Photalks 앱은 백그라운드 위치 권한 허용이 필요합니다.',
          '앱 설정 화면을 열어서 항상 허용으로 바꿔주세요.',
          [
            {
              text: '네',
              onPress: () => Linking.openSettings(),
            },
            {
              text: '아니오',
              style: 'cancel',
            },
          ],
        );
      }
    } else if (Platform.OS === 'android') {
      const permission = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      if (permission === RESULTS.GRANTED) {
        return permission;
      }
      if (permission === RESULTS.BLOCKED || RESULTS.DENIED) {
        Alert.alert(
          'Photalks 앱은 백그라운드 위치 권한 허용이 필요합니다.',
          '앱 설정 화면을 열어서 항상 허용으로 바꿔주세요.',
          [
            {
              text: '네',
              onPress: () => Linking.openSettings(),
            },
            {
              text: '아니오',
              style: 'cancel',
            },
          ],
        );
      }
    }
  } catch (e) {
    console.error(e);
  }
};

export default requestLocationPermission;
