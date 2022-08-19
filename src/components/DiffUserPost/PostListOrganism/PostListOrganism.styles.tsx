import {Dimensions, StyleSheet} from 'react-native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';

const {width, height} = Dimensions.get('window');

export const style = StyleSheet.create({
  flatList: {
    width: width - widthPercentage(21),
    height: height - heightPercentage(73),
    alignSelf: 'center',
  },
});
