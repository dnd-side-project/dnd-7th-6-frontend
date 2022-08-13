import styled from '@emotion/native';

import {BodyText5} from '../Text/BodyText';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

interface Props {
  focus: boolean;
  isBorder: boolean;
}

export const TextFieldWrapper = styled.Pressable(({focus, isBorder}: Props) => ({
  borderColor: focus ? '#8048F8' : theme.colors.grayscale[3],
  height: heightPercentage(174),
  alignSelf: 'flex-start',
  width: '100%',
  borderWidth: isBorder ? 1 : 0,
  borderRadius: 8,
  padding: widthPercentage(12),
}));

export const TextFieldInput = styled.TextInput({
  width: '100%',
  height: '100%',
});

export const Count = styled(BodyText5)({
  color: theme.colors.grayscale[5],
  marginTop: heightPercentage(8),
  textAlign: 'right',
});
