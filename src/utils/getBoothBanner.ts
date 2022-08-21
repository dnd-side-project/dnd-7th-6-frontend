import {ImageRequireSource} from 'react-native';

const getBoothBanner = (star: number | null): ImageRequireSource => {
  if (!star) {
    return require('src/assets/images/boothDetailBanner/stars_0.png');
  }
  if (star >= 5) {
    return require('src/assets/images/boothDetailBanner/stars_5.png');
  } else if (star >= 4) {
    return require('src/assets/images/boothDetailBanner/stars_4.png');
  } else if (star >= 3) {
    return require('src/assets/images/boothDetailBanner/stars_3.png');
  } else if (star >= 2) {
    return require('src/assets/images/boothDetailBanner/stars_2.png');
  } else {
    return require('src/assets/images/boothDetailBanner/stars_1.png');
  }
};

export default getBoothBanner;
