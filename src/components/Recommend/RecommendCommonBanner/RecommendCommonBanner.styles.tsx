import styled from '@emotion/native';

import {heightPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Conatiner = styled.View({
  width: '100%',
  height: heightPercentage(120),
  backgroundColor: theme.colors.grayscale[3],
  marginBottom: heightPercentage(56),
});
