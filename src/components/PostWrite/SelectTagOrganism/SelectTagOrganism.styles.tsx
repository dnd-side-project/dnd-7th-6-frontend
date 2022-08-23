import styled from '@emotion/native';
import {Dimensions} from 'react-native';

import {BodyText5} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const SelectTagScrollView = styled.ScrollView({
  height: Dimensions.get('window').height - heightPercentage(220),
  paddingHorizontal: widthPercentage(16),
});

export const WarningText = styled(BodyText5)({
  color: theme.colors.grayscale[6],
  marginLeft: widthPercentage(4),
  marginTop: -heightPercentage(2),
});

export const RowBox = styled.View({
  marginTop: heightPercentage(8),
  flexDirection: 'row',
});
