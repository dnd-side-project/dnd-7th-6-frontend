import styled from '@emotion/native';
import {Dimensions, StyleSheet} from 'react-native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';

const {width} = Dimensions.get('window');

export const Container = styled.View({
  alignItems: 'center',
});

export const FlatListWrapper = styled.View({
  marginBottom: heightPercentage(160),
});

export const style = StyleSheet.create({
  flatList: {
    width: width - widthPercentage(21),
  },
});
