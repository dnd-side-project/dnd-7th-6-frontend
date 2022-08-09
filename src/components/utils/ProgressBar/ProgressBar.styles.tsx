import styled from '@emotion/native';

import {heightPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

interface Props {
  length: number;
}

export const MainBar = styled.View({
  width: '100%',
  height: heightPercentage(4),
  backgroundColor: theme.colors.grayscale[3],
  borderRadius: 8,
});

export const SubBar = styled.View<Props>(({length}) => ({
  width: `${length * 100}%`,
  height: heightPercentage(4),
  backgroundColor: theme.colors.grayscale[5],
  borderRadius: 8,
}));
