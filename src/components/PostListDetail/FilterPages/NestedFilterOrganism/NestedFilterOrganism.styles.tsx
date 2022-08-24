import styled from '@emotion/native';

import {SubHeadline3} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  marginBottom: heightPercentage(52),
});

export const TypeOfFilter = styled(SubHeadline3)({
  color: theme.colors.grayscale[7],
});

export const ChipWrapper = styled.View({
  marginRight: widthPercentage(8),
  marginBottom: heightPercentage(12),
});

export const ChipContainer = styled.View({
  paddingTop: heightPercentage(12),
  flexDirection: 'row',
  flexWrap: 'wrap',
});
