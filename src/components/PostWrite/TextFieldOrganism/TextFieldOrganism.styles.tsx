import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';

export const Container = styled.View<{focus: boolean; isFlex: boolean}>(({focus, isFlex}) => ({
  paddingVertical: heightPercentage(16),
  paddingHorizontal: widthPercentage(16),
  marginBottom: isFlex ? (focus ? heightPercentage(200) : 0) : 0,
}));
