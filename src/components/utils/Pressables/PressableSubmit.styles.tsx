import styled from '@emotion/native';

import {SubHeadline3} from '../Text';

import {heightPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const SubmitButtonContainer = styled.Pressable({
  backgroundColor: theme.colors.primary[1].normal,
  height: heightPercentage(48),
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
});

export const ButtonTitle = styled(SubHeadline3)({
  color: theme.colors.grayscale[2],
});
