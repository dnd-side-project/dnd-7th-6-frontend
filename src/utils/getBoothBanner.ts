import {ImageRequireSource} from 'react-native';

const getBoothBanner = (star: number | null): ImageRequireSource => {
  if (!star) {
    return require('src/assets/images/boothDetailBanner/stars_4.jpg');
  }
  if (star >= 5) {
    return require('src/assets/images/boothDetailBanner/stars_5.jpg');
  } else if (star >= 4) {
    return require('src/assets/images/boothDetailBanner/stars_4.jpg');
  } else if (star >= 3) {
    return require('src/assets/images/boothDetailBanner/stars_3.jpg');
  } else if (star >= 2) {
    return require('src/assets/images/boothDetailBanner/stars_2.jpg');
  } else {
    return require('src/assets/images/boothDetailBanner/stars_1.jpg');
  }
};

export default getBoothBanner;
