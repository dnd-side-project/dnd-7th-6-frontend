import styled from '@emotion/native';

import {BodyText3} from '../utils/Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.Pressable<{active: boolean}>(({active}) => ({
  paddingVertical: heightPercentage(7),
  paddingRight: widthPercentage(6),
  paddingLeft: widthPercentage(12),
  flexDirection: 'row',
  borderRadius: 20,
  borderColor: active ? '' : theme.colors.grayscale[3],
  borderWidth: 1,
  alignSelf: 'flex-start',
  backgroundColor: active ? theme.colors.grayscale[8] : theme.colors.grayscale[1],
}));

export const Title = styled(BodyText3)<{active: boolean}>(({active}) => ({
  color: active ? theme.colors.grayscale[1] : theme.colors.grayscale[10],
}));
