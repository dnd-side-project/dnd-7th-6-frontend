import styled from '@emotion/native';

import {fontPercentage, heightPercentage, widthPercentage} from 'src/utils/ScreenResponse';

export const Container = styled.Pressable({
  alignSelf: 'flex-start',
  width: widthPercentage(339),
  height: heightPercentage(48),
  alignItems: 'center',
  borderColor: '#E5E5E5',
  borderWidth: 2,
  borderRadius: 4,
  justifyContent: 'center',
});

export const PressableAdditionText = styled.Text({
  color: '#666666',
  fontStyle: 'normal',
  fontSize: fontPercentage(14),
  display: 'flex',
});
