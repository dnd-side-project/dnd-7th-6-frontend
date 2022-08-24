import styled from '@emotion/native';

import {BodyText5} from '../../utils/Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export type SquareViewProps = {
  index: number;
};

export const SquareView = styled.View(({index}: SquareViewProps) => ({
  height: heightPercentage(110),
  marginRight: widthPercentage(12),
  marginLeft: index === 0 ? heightPercentage(16) : 0,
}));

export const SquareText = styled(BodyText5)({
  color: theme.colors.grayscale[9],
  marginTop: heightPercentage(2),
  alignSelf: 'center',
});
