import styled from '@emotion/native';

import {BodyText3} from '../utils/Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const RefreshPressable = styled.Pressable({
  backgroundColor: theme.colors.grayscale[7],
  width: widthPercentage(104),
  height: heightPercentage(36),
  borderRadius: 8,
  justifyContent: 'center',
});

export const RefreshPressableText = styled(BodyText3)({
  color: theme.colors.grayscale[1],
  alignSelf: 'center',
  justifyContent: 'center',
});
