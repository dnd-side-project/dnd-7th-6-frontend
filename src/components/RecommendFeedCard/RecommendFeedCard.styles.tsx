import styled from '@emotion/native';
import {StyleSheet} from 'react-native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';

export const FeedCardContainer = styled.View({
  width: widthPercentage(164),
  height: heightPercentage(220),
  borderRadius: 12,
  backgroundColor: '#F6F6F6',
});

export const IconContainer = styled.View({
  position: 'absolute',
  height: '100%',
  alignSelf: 'flex-end',
  justifyContent: 'flex-end',
  paddingVertical: heightPercentage(16),
  paddingHorizontal: widthPercentage(15),
  borderColor: 'black',
  zIndex: 5,
});

export const styles = StyleSheet.create({
  photoStyle: {
    flex: 1,
    zIndex: 2,
  },
});
