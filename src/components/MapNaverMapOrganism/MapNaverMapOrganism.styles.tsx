import styled from '@emotion/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const ContainerView = styled.View({
  height: '100%',
  width: '100%',
  zIndex: 1,
});

export const MapRefreshPressableWrapper = styled.View({
  position: 'absolute',
  marginTop: getStatusBarHeight(true),
  alignSelf: 'center',
});

export const RefreshandSearchWrapper = styled.View({
  width: '100%',
  zIndex: 2,
});
