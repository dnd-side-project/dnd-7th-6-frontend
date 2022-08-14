import styled from '@emotion/native';

import {SubHeadline3, BodyText5} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const SearchListWrapper = styled.Pressable({
  width: '100%',
  height: heightPercentage(72),
});

export const SearchPlaceName = styled(SubHeadline3)({
  marginTop: widthPercentage(12),
  color: theme.colors.grayscale[10],
  marginHorizontal: widthPercentage(16),
  marginBottom: heightPercentage(4),
});

export const SearchAddressName = styled(BodyText5)({
  color: theme.colors.grayscale[6],
  marginHorizontal: widthPercentage(16),
  marginBottom: widthPercentage(12),
});

export const SearchBarSeparator = styled.View({
  width: widthPercentage(343),
  height: heightPercentage(1),
  backgroundColor: theme.colors.grayscale[2],
});
