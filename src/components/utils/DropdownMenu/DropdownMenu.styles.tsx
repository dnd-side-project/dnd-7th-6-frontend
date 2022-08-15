import styled from '@emotion/native';

import {BodyText4} from '../Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const List = styled.View({
  borderRadius: 8,
  borderWidth: 1,
  borderColor: theme.colors.grayscale[4],
  backgroundColor: theme.colors.grayscale[0],
  alignSelf: 'flex-start',
  overflow: 'hidden',
});

export const Element = styled.Pressable<{isLast: boolean}>(({isLast}) => ({
  paddingVertical: heightPercentage(11),
  paddingHorizontal: widthPercentage(36),
  borderBottomWidth: isLast ? 0 : 1,
  borderColor: theme.colors.grayscale[3],
}));

export const Label = styled(BodyText4)({
  color: theme.colors.grayscale[7],
  textDecorationLine: 'underline',
});
