import styled from '@emotion/native';

import {BodyText5} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingHorizontal: widthPercentage(16),
  paddingVertical: heightPercentage(19),
});

export const WordCountWrapper = styled.View({
  paddingVertical: heightPercentage(8),
  alignItems: 'flex-end',
});

export const WordCount = styled(BodyText5)({
  color: theme.colors.grayscale[5],
});
