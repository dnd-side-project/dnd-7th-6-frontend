import styled from '@emotion/native';
import {Dimensions} from 'react-native';

import theme from 'src/styles/Theme';

const {width} = Dimensions.get('window');

export const Container = styled.Pressable({
  width,
  height: width,
  backgroundColor: theme.colors.grayscale[2],
  justifyContent: 'center',
  alignItems: 'center',
});
