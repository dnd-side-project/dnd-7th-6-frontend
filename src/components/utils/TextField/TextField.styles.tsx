import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

interface Props {
  focus: boolean;
}

export const TextFieldWrapper = styled.View(({focus}: Props) => ({
  borderColor: focus ? '#8048F8' : theme.colors.grayscale[3],
  height: heightPercentage(174),
  width: widthPercentage(343),
  borderRadius: 8,
  borderWidth: 1,
  padding: 12,
  alignSelf: 'center',
}));

export const TextFieldInput = styled.TextInput({
  width: '100%',
  height: '100%',
});
