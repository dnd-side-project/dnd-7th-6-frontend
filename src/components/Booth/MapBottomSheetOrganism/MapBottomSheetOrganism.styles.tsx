import styled from '@emotion/native';

import {BodyText5} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const BottomSheetConatiner = styled.View({
  width: '100%',
  height: '100%',
  flex: 1,
});

export const bottomSheetStyle = {
  borderRadius: 24,
  zIndex: 2,
  elevation: 2,
};

export const handleStyle = {
  width: widthPercentage(50),
  height: heightPercentage(4),
  backgroundColor: theme.colors.grayscale[8],
};

export const NoDataContainer = styled.View({
  height: heightPercentage(118),
  justifyContent: 'center',
});

export const NoDataText = styled(BodyText5)({
  alignSelf: 'center',
  color: theme.colors.grayscale[4],
});
