import styled from '@emotion/native';

import {widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.Pressable({
  width: widthPercentage(42),
  height: widthPercentage(42),
  borderRadius: 100,
  backgroundColor: theme.colors.grayscale[1],
  elevation: 2,
  shadowColor: 'rgba(0, 0, 0, 0,16)',
  shadowOffset: {width: 0, height: 4},
  shadowRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
});
