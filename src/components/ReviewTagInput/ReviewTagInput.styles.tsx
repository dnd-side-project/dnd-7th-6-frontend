import styled from '@emotion/native';

import {BodyText3} from '../utils/Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const SearchBarCotainer = styled.View({
  flexDirection: 'row',
  backgroundColor: theme.colors.grayscale[2],
  borderRadius: 8,
  paddingVertical: heightPercentage(4),
  width: widthPercentage(343),
  height: heightPercentage(46),
  alignSelf: 'center',
});

export const SearchBarTextInput = styled.TextInput({
  paddingVertical: 0,
  width: widthPercentage(270),
  height: '100%',
  marginLeft: widthPercentage(8),
  color: theme.colors.grayscale[8],
  fontFamily: theme.fonts.Body[3].fontFamily,
  fontSize: theme.fonts.Body[3].size,
});

export const ChipInnerTextInput = styled.TextInput({
  paddingVertical: 0,
  width: widthPercentage(270),
  height: '100%',
  marginLeft: widthPercentage(8),
  color: theme.colors.grayscale[8],
  fontFamily: theme.fonts.Body[3].fontFamily,
  fontSize: theme.fonts.Body[3].size,
});

export const ChipScrollViewWrapper = styled.View({
  paddingHorizontal: widthPercentage(2),
  width: widthPercentage(308),
});

export const RightCountView = styled(BodyText3)({
  position: 'absolute',
  color: theme.colors.grayscale[6],
  right: widthPercentage(12),
  alignSelf: 'center',
  justifyContent: 'center',
});

export const ChipTextInput = styled.TextInput({
  fontFamily: theme.fonts.Body[3].fontFamily,
  fontSize: theme.fonts.Body[3].size,
  height: heightPercentage(50),
});
