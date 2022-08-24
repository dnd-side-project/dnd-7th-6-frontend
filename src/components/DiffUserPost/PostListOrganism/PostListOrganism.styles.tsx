import {Dimensions, StyleSheet} from 'react-native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';

const {width} = Dimensions.get('window');

export const style = StyleSheet.create({
  flatList: {
    width: width - widthPercentage(21),
    marginBottom: heightPercentage(40),
    alignSelf: 'center',
  },
});
