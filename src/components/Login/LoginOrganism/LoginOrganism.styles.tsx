import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const LoginContainer = styled.View({
  width: '100%',
  height: '100%',
  alignItems: 'center',
  paddingTop: heightPercentage(76),
});

export const LoginImage = styled.View({
  backgroundColor: theme.colors.grayscale[2],
  width: widthPercentage(160),
  height: heightPercentage(160),
  marginBottom: heightPercentage(88),
});

export const KakaoLoginContainer = styled.Pressable({
  backgroundColor: '#FEE500',
  borderRadius: 4,
  width: widthPercentage(343),
  height: heightPercentage(48),
});

export const GoogleLoginContainer = styled.Pressable({
  marginTop: widthPercentage(8),
  backgroundColor: '#FFFFFF',
  borderRadius: 4,
  width: widthPercentage(343),
  height: heightPercentage(48),
  borderWidth: 1,
});
