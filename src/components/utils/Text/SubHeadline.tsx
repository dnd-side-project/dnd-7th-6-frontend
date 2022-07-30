import styled from '@emotion/native';

import theme from 'src/styles/Theme';

const fonts = theme.fonts.SubHeadline;

export const SubHeadline1 = styled.Text({
  fontSize: fonts[0].size,
  fontFamily: fonts[0].fontFamily,
  lineHeight: fonts[0].lineHeight,
});

export const SubHeadline2 = styled.Text({
  fontSize: fonts[1].size,
  fontFamily: fonts[1].fontFamily,
  lineHeight: fonts[1].lineHeight,
});

export const SubHeadline3 = styled.Text({
  fontSize: fonts[2].size,
  fontFamily: fonts[2].fontFamily,
  lineHeight: fonts[2].lineHeight,
});
