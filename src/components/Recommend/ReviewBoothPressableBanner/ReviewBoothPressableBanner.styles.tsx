import styled from '@emotion/native';

import {heightPercentage} from 'src/styles/ScreenResponse';

export const PressableImageWrapper = styled.Pressable({
  marginVertical: heightPercentage(24),
});

export const BannerImage = styled.Image({
  flexGrow: 0,
  width: '100%',
});
