import styled from '@emotion/native';
import {Dimensions, StyleSheet} from 'react-native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';

const {width, height} = Dimensions.get('window');

export const Container = styled.View({
  alignItems: 'center',
});

export const style = StyleSheet.create({
  flatList: {
    height: height - heightPercentage(215),
    width: width - widthPercentage(21),
  },
});
