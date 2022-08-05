import styled from '@emotion/native';

import {BodyText3} from '../utils/Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.Pressable({
  paddingVertical: heightPercentage(6),
  paddingRight: widthPercentage(6),
  paddingLeft: widthPercentage(12),
  flexDirection: 'row',
  borderRadius: 6,
  borderColor: theme.colors.grayscale[3],
  borderWidth: 1,
  alignSelf: 'flex-start',
});

export const Title = styled(BodyText3)({
  color: theme.colors.grayscale[10],
});
