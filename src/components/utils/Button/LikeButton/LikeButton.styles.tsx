import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.Pressable({
  paddingTop: heightPercentage(6),
  paddingBottom: heightPercentage(4),
  paddingHorizontal: widthPercentage(5),
  borderRadius: 100,
  backgroundColor: theme.colors.grayscale[9] + '88',
});
