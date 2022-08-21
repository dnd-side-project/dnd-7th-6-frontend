import styled from '@emotion/native';
import {Dimensions} from 'react-native';

import {heightPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const DefaultScroll = styled.ScrollView({
  backgroundColor: theme.colors.grayscale[1],
  width: '100%',
  height: Dimensions.get('window').height - heightPercentage(140),
});
