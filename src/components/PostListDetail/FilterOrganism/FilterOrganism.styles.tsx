import styled from '@emotion/native';

import {BodyText3} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingHorizontal: widthPercentage(16),
  paddingBottom: heightPercentage(14),
  flexDirection: 'row',
  alignItems: 'center',
  borderBottomWidth: 1,
  borderBottomColor: theme.colors.grayscale[2],
});

export const ChipWrapper = styled.View({
  marginRight: widthPercentage(8),
});

export const SortingButton = styled(BodyText3)({
  textDecorationLine: 'underline',
  color: theme.colors.grayscale[10],
  marginRight: widthPercentage(16),
});
