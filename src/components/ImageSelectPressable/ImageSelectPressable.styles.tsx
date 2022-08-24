import styled from '@emotion/native';

import {BodyText3} from '../utils/Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const SelectPressableContainer = styled.Pressable({
  width: heightPercentage(90),
  height: heightPercentage(90),
  marginLeft: widthPercentage(16),
  borderRadius: 8,
  borderColor: theme.colors.grayscale[5],
  borderStyle: 'dashed',
  borderWidth: 1,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

export const ImageCountText = styled(BodyText3)({
  color: theme.colors.grayscale[5],
});
