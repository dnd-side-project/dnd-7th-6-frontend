import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const SearchBarCotainer = styled.Pressable({
  flexDirection: 'row',
  backgroundColor: theme.colors.grayscale[2],
  borderRadius: 8,
  width: widthPercentage(343),
  height: heightPercentage(40),
  alignItems: 'center',
});

export const SearchBarIconWrapper = styled.View({
  marginLeft: widthPercentage(16),
});