import styled from '@emotion/native';

import theme from 'src/styles/Theme';

const fonts = theme.fonts.Body;

export const BodyText1 = styled.Text({
  fontSize: fonts[0].size,
  fontFamily: fonts[0].fontFamily,
  lineHeight: fonts[0].lineHeight,
});

export const BodyText2 = styled.Text({
  fontSize: fonts[1].size,
  fontFamily: fonts[1].fontFamily,
  lineHeight: fonts[1].lineHeight,
});

export const BodyText3 = styled.Text({
  fontSize: fonts[2].size,
  fontFamily: fonts[2].fontFamily,
  lineHeight: fonts[2].lineHeight,
});

export const BodyText4 = styled.Text({
  fontSize: fonts[3].size,
  fontFamily: fonts[3].fontFamily,
  lineHeight: fonts[3].lineHeight,
});
