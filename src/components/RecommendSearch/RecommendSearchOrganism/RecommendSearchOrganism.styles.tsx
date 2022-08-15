import styled from '@emotion/native';

import {heightPercentage} from 'src/styles/ScreenResponse';

export const Container = styled.View({
  flex: 1,
  width: '100%',
  height: '100%',
});

export const HeaderContainer = styled.SafeAreaView({
  marginTop: heightPercentage(4),
  flexDirection: 'row',
});
