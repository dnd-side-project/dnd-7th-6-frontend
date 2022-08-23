import styled from '@emotion/native';

import {BodyText5} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const SearchListView = styled.View({
  flex: 1,
  alignSelf: 'center',
  width: '100%',
});

export const TextView = styled.View({
  flex: 1,
  alignSelf: 'center',
  width: '100%',
});

export const DescriptionText = styled(BodyText5)({
  marginLeft: widthPercentage(16),
  marginTop: heightPercentage(8),
  color: theme.colors.primary[1].normal,
});
