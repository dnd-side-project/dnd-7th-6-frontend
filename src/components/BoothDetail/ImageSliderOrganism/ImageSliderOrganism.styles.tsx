import styled from '@emotion/native';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View({
  width,
  height: width,
});

export const style = StyleSheet.create({
  fastImage: {
    height: '100%',
  },
  dot: {
    width: 6,
    height: 6,
  },
});
