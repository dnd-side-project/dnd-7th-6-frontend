import styled from '@emotion/native';

import {SubHeadline3} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingVertical: heightPercentage(12),
  paddingHorizontal: widthPercentage(16),
});

export const TypeOfFilter = styled(SubHeadline3)({
  color: theme.colors.grayscale[7],
});
