import styled from '@emotion/native';

import theme from 'src/styles/Theme';

export const Blocking = styled.Pressable({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: theme.colors.grayscale[10],
  opacity: 0.5,
});
