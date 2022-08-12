import styled from '@emotion/native';

import {BodyText5} from '../Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.Pressable({
  paddingVertical: heightPercentage(6),
  paddingHorizontal: widthPercentage(8),
  flexDirection: 'row',
  backgroundColor: theme.colors.grayscale[2],
  borderRadius: 20,
});

export const TagTitle = styled(BodyText5)({
  color: theme.colors.grayscale[6],
  textAlignVertical: 'center',
  marginLeft: widthPercentage(4),
});
