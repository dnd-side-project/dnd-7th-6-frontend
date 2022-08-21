import styled from '@emotion/native';
import {Dimensions} from 'react-native';

import {heightPercentage} from 'src/styles/ScreenResponse';

const {height} = Dimensions.get('window');

export const Container = styled.View({
  alignItems: 'center',
  height: height - heightPercentage(200),
});
