import styled from '@emotion/native';

import {SubHeadline3} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const SearchListWrapper = styled.Pressable({
  marginTop: heightPercentage(10),
  width: '100%',
  height: heightPercentage(47),
  justifyContent: 'center',
});

export const SearchPlaceName = styled(SubHeadline3)({
  color: theme.colors.grayscale[10],
  marginHorizontal: widthPercentage(16),
  marginBottom: heightPercentage(4),
});

export const SearchBarSeparator = styled.View({
  width: widthPercentage(343),
  height: heightPercentage(1),
  backgroundColor: theme.colors.grayscale[2],
});
