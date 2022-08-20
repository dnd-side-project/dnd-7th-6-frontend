import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';

export const ButtonContainer = styled.Pressable({
  borderRadius: 100,
  backgroundColor: '#00000066',
  alignItems: 'center',
  justifyContent: 'center',
  width: widthPercentage(40),
  height: widthPercentage(40),
  top: -heightPercentage(30),
});

export const PrevContainer = styled(ButtonContainer)({
  left: widthPercentage(16),
});

export const NextContainer = styled(ButtonContainer)({
  right: widthPercentage(16),
});
