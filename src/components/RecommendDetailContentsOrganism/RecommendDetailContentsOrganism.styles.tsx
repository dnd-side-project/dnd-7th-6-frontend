import styled from '@emotion/native';

import {fontPercentage, heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingVertical: heightPercentage(31),
  paddingHorizontal: widthPercentage(18),
  backgroundColor: 'white',
});

export const Header = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const TextSection = styled.View({
  flexDirection: 'row',
});

export const Contents = styled.Text({
  paddingVertical: heightPercentage(16),
  lineHeight: heightPercentage(19.6),
  fontSize: fontPercentage(14),
  color: theme.colors.grayscale[8],
});

export const ChipWrapper = styled.View({
  paddingVertical: heightPercentage(8),
  flexWrap: 'wrap',
  flexDirection: 'row',
});

export const ChipContainer = styled.View({
  paddingRight: widthPercentage(8),
  paddingTop: heightPercentage(8),
});

export const Username = styled.Text({
  fontSize: fontPercentage(14),
  lineHeight: heightPercentage(19.6),
  color: theme.colors.grayscale[7],
  textAlignVertical: 'center',
});

export const DateText = styled.Text({
  fontSize: fontPercentage(12),
  lineHeight: heightPercentage(16.8),
  color: theme.colors.grayscale[5],
  marginHorizontal: widthPercentage(6),
  textAlignVertical: 'center',
});

export const IconWrapper = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

export const IconContainer = styled.View({
  width: widthPercentage(32),
  height: heightPercentage(32),
  justifyContent: 'center',
  alignItems: 'center',
});
