import styled from '@emotion/native';

import {BodyText6} from '../Text';
import {SubHeadline4} from '../Text/SubHeadline';

import {fontPercentage, heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingVertical: heightPercentage(14),
  paddingHorizontal: widthPercentage(16),
  backgroundColor: 'white',
});

export const Header = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Contents = styled.Text({
  paddingBottom: heightPercentage(40),
  lineHeight: heightPercentage(19.6),
  fontSize: fontPercentage(14),
  color: theme.colors.grayscale[8],
});

export const Username = styled(SubHeadline4)({
  color: theme.colors.grayscale[7],
  paddingVertical: heightPercentage(8),
  textAlignVertical: 'center',
  fontWeight: '600',
});

export const DateText = styled(BodyText6)({
  color: theme.colors.grayscale[5],
  textAlignVertical: 'center',
});
