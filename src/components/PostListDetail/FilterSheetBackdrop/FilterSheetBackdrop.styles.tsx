import styled from '@emotion/native';

import {BodyText3} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Blocking = styled.Pressable({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: theme.colors.grayscale[10],
  opacity: 0.5,
});

export const HeaderContainer = styled.SafeAreaView({
  marginTop: heightPercentage(4),
  flexDirection: 'row',
});

export const TitleContainer = styled.Pressable({
  width: widthPercentage(311),
  height: heightPercentage(46),
  backgroundColor: theme.colors.grayscale[2],
  marginLeft: widthPercentage(48),
  borderRadius: 8,
  justifyContent: 'center',
});

export const HeaderTitle = styled(BodyText3)({
  color: theme.colors.grayscale[9],
  marginLeft: widthPercentage(16),
});
