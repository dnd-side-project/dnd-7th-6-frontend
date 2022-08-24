import styled from '@emotion/native';

import {BodyText4} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const SearchBarCotainer = styled.Pressable({
  flexDirection: 'row',
  backgroundColor: theme.colors.grayscale[1],
  borderRadius: 8,
  width: widthPercentage(343),
  height: heightPercentage(40),
  shadowOffset: {width: 0, height: 4},
  shadowRadius: 8,
  shadowOpacity: 0.1,
  elevation: 2,
  alignItems: 'center',
});

export const SearchBarText = styled(BodyText4)({
  marginLeft: widthPercentage(8),
  textDecorationLine: 'underline',
  color: theme.colors.grayscale[6],
});

export const SearchBarIconWrapper = styled.View({
  marginLeft: widthPercentage(16),
});
