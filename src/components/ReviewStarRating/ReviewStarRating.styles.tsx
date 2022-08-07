import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';

export const StarWrapper = styled.View({
  width: widthPercentage(230),
  flexDirection: 'row',
  alignSelf: 'center',
});

export const StarPressable = styled.Pressable({
  width: widthPercentage(46),
  height: heightPercentage(46),
});
