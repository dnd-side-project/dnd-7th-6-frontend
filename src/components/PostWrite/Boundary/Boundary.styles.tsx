import styled from '@emotion/native';
import {heightPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const BoundaryView = styled.View({
  width: '100%',
  height: heightPercentage(8),
  backgroundColor: theme.colors.grayscale[2],
});
