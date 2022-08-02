import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const requestLocationPermission = async () => {
  try {
    if (Platform.OS === 'ios') {
      return await Geolocation.requestAuthorization('always');
    } else if (Platform.OS === 'android') {
      const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (hasPermission) {
        return 'granted';
      } else {
        const status = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );

        if (status === 'granted') {
          return status;
        }
      }
    }
  } catch (e) {
    console.error(e);
  }
};

export default requestLocationPermission;
