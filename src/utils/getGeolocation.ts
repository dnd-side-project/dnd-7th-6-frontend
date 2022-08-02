import Geolocation from 'react-native-geolocation-service';
import {type Coord} from 'react-native-nmap';

const getGeolocation = () => {
  return new Promise<Coord>((resolve, reject) => {
    Geolocation.getCurrentPosition(
      current => {
        resolve({longitude: current.coords.longitude, latitude: current.coords.latitude});
      },
      error => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
      },
    );
  });
};

export default getGeolocation;
