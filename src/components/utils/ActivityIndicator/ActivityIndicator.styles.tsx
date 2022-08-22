import styled from '@emotion/native';

import theme from 'src/styles/Theme';

export const UIActivityIndicator = styled.ActivityIndicator({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10,
});

export const BackdropView = styled.View({
  width: '100%',
  height: '100%',
  flex: 1,
  opacity: 0.8,
  backgroundColor: theme.colors.grayscale[3],
});
