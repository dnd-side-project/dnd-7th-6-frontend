import {Platform} from 'react-native';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

const requestcameraPermission = async () => {
  try {
    if (Platform.OS === 'android') {
      const permissionResult = await check(PERMISSIONS.ANDROID.CAMERA);
      if (permissionResult === RESULTS.DENIED || permissionResult === RESULTS.GRANTED) {
        return await request(PERMISSIONS.ANDROID.CAMERA);
      } else {
        console.log(permissionResult);
        throw new Error('카메라 지원 안 함');
      }
    } else {
      const permissionResult = await check(PERMISSIONS.IOS.CAMERA);
      if (
        permissionResult === RESULTS.DENIED ||
        permissionResult === RESULTS.LIMITED ||
        permissionResult === RESULTS.GRANTED
      ) {
        return await request(PERMISSIONS.IOS.CAMERA);
      } else {
        console.log(permissionResult);
        throw new Error('카메라 지원 안 함');
      }
    }
  } catch (error) {}
};

export default requestcameraPermission;
