import {Config} from 'react-native-config';

import valueOfPlatform from './valueOfPlatform';

const getApiServer = valueOfPlatform({
  ios: Config.IOS_API_SERVER,
  android: Config.API_SERVER,
});

export default getApiServer;
