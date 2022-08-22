import {Alert, Linking, Platform} from 'react-native';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

const requestcameraPermission = async () => {
  try {
    if (Platform.OS === 'ios') {
      const permissionResult = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
      if (
        permissionResult === RESULTS.DENIED ||
        permissionResult === RESULTS.LIMITED ||
        permissionResult === RESULTS.GRANTED
      ) {
        return await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
      } else {
        Alert.alert(
          'Photalks 앱에서 사진을 등록하기 위해 권한이 필요합니다.',
          '앱 설정 화면을 열어서 사진 접근 권한을 허용으로 바꿔주세요.',
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
  } catch (error) {
    console.log(error);
  }
};

export default requestcameraPermission;
