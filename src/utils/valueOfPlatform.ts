import {Platform} from 'react-native';

const valueOfPlatform = <T>({ios, android}: {ios: T; android: T}) => {
  return Platform.OS === 'ios' ? ios : android;
};

export default valueOfPlatform;
