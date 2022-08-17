import styled from '@emotion/native';

import {BodyText1, BodyText4} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  width: '100%',
  flex: 1,
  marginTop: heightPercentage(8),
});

export const ListContainer = styled.Pressable({
  width: '100%',
  height: heightPercentage(52),
  alignContent: 'center',
  marginBottom: heightPercentage(4),
  flexDirection: 'row',
});

export const ListTitle = styled(BodyText1)({
  marginLeft: widthPercentage(16),
  color: theme.colors.grayscale[8],
});

export const LogOutPressable = styled.Pressable({
  position: 'absolute',
  right: widthPercentage(32),
});

export const LogOutText = styled(BodyText4)({
  textDecorationLine: 'underline',
  color: theme.colors.grayscale[10],
});
