import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const BottomSheetConatiner = styled.View({
  width: '100%',
  height: '100%',
  flex: 1,
});

export const bottomSheetStyle = {
  borderRadius: 16,
  zIndex: 2,
  elevation: 2,
};

export const handleStyle = {
  width: widthPercentage(70),
  height: heightPercentage(4),
  backgroundColor: theme.colors.grayscale[6],
};
