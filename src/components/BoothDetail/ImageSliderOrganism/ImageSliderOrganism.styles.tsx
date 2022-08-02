import styled from '@emotion/native';
import {StyleSheet} from 'react-native';

import {heightPercentage} from 'src/styles/ScreenResponse';

export const Container = styled.View({
  height: heightPercentage(281),
});

export const style = StyleSheet.create({
  fastImage: {
    height: '100%',
  },
});
