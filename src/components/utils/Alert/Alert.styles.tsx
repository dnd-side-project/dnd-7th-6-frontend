import styled from '@emotion/native';

import {BodyText4, SubHeadline2, SubHeadline3} from '../Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Backdrop = styled.View({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: theme.colors.grayscale[10] + 'aa',
  paddingHorizontal: widthPercentage(16),
  justifyContent: 'center',
});

export const Modal = styled.View({
  paddingVertical: heightPercentage(40),
  paddingHorizontal: widthPercentage(16),
  backgroundColor: theme.colors.grayscale[0],
  borderRadius: 12,
  alignItems: 'center',
});

export const Title = styled(SubHeadline2)({
  color: theme.colors.grayscale[9],
});

export const SubTitle = styled(BodyText4)({
  color: theme.colors.grayscale[7],
});

export const ButtonContainer = styled.View({
  flexDirection: 'row',
  paddingTop: heightPercentage(30),
});

export const CancelButton = styled.Pressable({
  width: widthPercentage(148),
  paddingVertical: heightPercentage(14),
  paddingHorizontal: heightPercentage(16),
  backgroundColor: theme.colors.grayscale[2],
  color: theme.colors.grayscale[6],
  marginRight: widthPercentage(7),
  borderRadius: 8,
});

export const CheckButton = styled.Pressable({
  width: widthPercentage(148),
  paddingVertical: heightPercentage(14),
  paddingHorizontal: heightPercentage(16),
  backgroundColor: theme.colors.primary[1].normal,
  color: theme.colors.grayscale[6],
  borderRadius: 8,
});

const ButtonText = styled(SubHeadline3)({
  textAlign: 'center',
});

export const CancelButtonText = styled(ButtonText)({
  color: theme.colors.grayscale[6],
});

export const CheckButtonText = styled(ButtonText)({
  color: theme.colors.grayscale[1],
});
