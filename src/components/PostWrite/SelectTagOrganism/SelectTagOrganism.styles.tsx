import styled from '@emotion/native';
import {Dimensions} from 'react-native';

import {heightPercentage} from 'src/styles/ScreenResponse';

export const SelectTagScrollView = styled.ScrollView({
  height: Dimensions.get('window').height - heightPercentage(220),
});
