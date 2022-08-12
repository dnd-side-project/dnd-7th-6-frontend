import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const ContainerView = styled.View({
  height: '100%',
  width: '100%',
  position: 'relative',
});

export const FilterWrapper = styled.View({
  width: '100%',
});

export const MapWrapper = styled.View({
  width: '100%',
  height: '100%',
  zIndex: 1,
});

export const RefreshPressableWrapper = styled.View({
  elevation: 1,
  position: 'absolute',
  alignSelf: 'center',
  bottom: heightPercentage(157),
});

export const CurrentPositionPressable = styled.Pressable({
  elevation: 1,
  position: 'absolute',
  alignSelf: 'center',
  width: heightPercentage(44),
  height: heightPercentage(44),
  bottom: heightPercentage(216),
  right: widthPercentage(16),
  backgroundColor: theme.colors.grayscale[2],
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100,
});
