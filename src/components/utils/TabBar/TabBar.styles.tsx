import styled from '@emotion/native';

import {heightPercentage} from 'src/styles/ScreenResponse';

export const Container = styled.View({
  flexDirection: 'row',
  height: heightPercentage(56),
});

export const TabWrapper = styled.Pressable({
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
});
