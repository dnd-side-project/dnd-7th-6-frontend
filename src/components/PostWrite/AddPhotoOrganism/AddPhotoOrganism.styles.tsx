import styled from '@emotion/native';
import {Dimensions} from 'react-native';
import {heightPercentage} from 'src/styles/ScreenResponse';

import theme from 'src/styles/Theme';

const {width} = Dimensions.get('window');

export const Container = styled.Pressable({
  marginTop: heightPercentage(8),
  width: width - 32,
  height: width - 32,
  alignSelf: 'center',
  backgroundColor: theme.colors.grayscale[2],
  justifyContent: 'center',
  alignItems: 'center',
});
