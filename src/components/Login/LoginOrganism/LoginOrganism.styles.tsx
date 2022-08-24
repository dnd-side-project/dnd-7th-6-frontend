import styled from '@emotion/native';

import {SubHeadline3} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  backgroundColor: 'rgba(243, 244, 255, 1)',
});

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
  alignItems: 'center',
  justifyContent: 'center',
});

export const GoogleLoginContainer = styled.Pressable({
  marginTop: widthPercentage(8),
  backgroundColor: theme.colors.grayscale[1],
  borderRadius: 4,
  width: widthPercentage(343),
  height: heightPercentage(48),
  borderWidth: 1,
  borderColor: theme.colors.grayscale[3],
  alignItems: 'center',
  justifyContent: 'center',
});

export const LoginTitle = styled(SubHeadline3)({
  color: theme.colors.grayscale[10],
});

export const LogoImage = styled.Image({
  position: 'absolute',
  left: widthPercentage(14),
  width: widthPercentage(18),
  height: heightPercentage(17),
});
