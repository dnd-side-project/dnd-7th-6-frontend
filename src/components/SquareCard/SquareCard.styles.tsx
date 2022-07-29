import styled from '@emotion/native';
import {StyleSheet} from 'react-native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';

export const CardContainer = styled.View({
  width: widthPercentage(84),
  height: heightPercentage(84),
  borderRadius: 12,
  backgroundColor: '#F6F6F6',
});

export const styles = StyleSheet.create({
  photoStyle: {
    flex: 1,
    zIndex: 2,
  },
});
