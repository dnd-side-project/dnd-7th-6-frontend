import styled from '@emotion/native';
import {Dimensions, StyleSheet} from 'react-native';

import {widthPercentage} from 'src/styles/ScreenResponse';

const {width} = Dimensions.get('window');

export const Container = styled.View({
  alignItems: 'center',
});

export const style = StyleSheet.create({
  flatList: {
    width: width - widthPercentage(21),
  },
});
