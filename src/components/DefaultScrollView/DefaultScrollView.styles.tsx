import styled from '@emotion/native';
import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {heightPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

const {height} = Dimensions.get('window');

export const DefaultScroll = styled.ScrollView({
  backgroundColor: theme.colors.grayscale[1],
  width: '100%',
  height: height - heightPercentage(100) - getStatusBarHeight(),
});
