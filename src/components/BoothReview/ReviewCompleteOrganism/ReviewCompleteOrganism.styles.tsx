import styled from '@emotion/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {BodyText4, Headline3} from 'src/components/utils/Text';
import {heightPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const ReviewCompleteContainer = styled.View({
  paddingTop: getStatusBarHeight(true) + 0,
  width: '100%',
  height: '100%',
});

export const IllustnTitleWrapper = styled.View({
  marginTop: heightPercentage(140),
  alignItems: 'center',
});

export const IllustWrapper = styled.View({
  alignSelf: 'center',
});

export const CompleteTitle = styled(Headline3)({
  marginTop: heightPercentage(16),
  marginVertical: heightPercentage(2),
  color: theme.colors.grayscale[9],
});

export const CompleteSubTitle = styled(BodyText4)({
  marginTop: heightPercentage(10),
  marginVertical: heightPercentage(2),
  color: theme.colors.grayscale[7],
  textAlign: 'center',
});

export const CompleteButtonWrapper = styled.View({
  position: 'absolute',
  bottom: heightPercentage(10),
  alignItems: 'center',
  width: '100%',
});

export const FirstButtonWrapper = styled.View({
  marginBottom: heightPercentage(10),
});
