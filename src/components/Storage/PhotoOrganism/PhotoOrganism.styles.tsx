import styled from '@emotion/native';
import {Dimensions, StyleSheet} from 'react-native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';

const {width, height} = Dimensions.get('window');

export const Container = styled.View({
  alignItems: 'center',
  height: height - heightPercentage(200),
});

export const style = StyleSheet.create({
  flatList: {
    height: height - heightPercentage(200),
    width: width - widthPercentage(21),
  },
});
