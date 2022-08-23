import styled from '@emotion/native';

import {BodyText5, Headline3, SubHeadline2, SubHeadline3} from '../utils/Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.SafeAreaView({
  flex: 1,
});

export const Title = styled(Headline3)({
  color: theme.colors.grayscale[10],
  marginTop: heightPercentage(48),
  marginLeft: widthPercentage(16),
  marginBottom: heightPercentage(30),
});

export const Subtitle = styled(SubHeadline2)({
  color: theme.colors.grayscale[10],
  marginLeft: widthPercentage(16),
  marginBottom: heightPercentage(22),
});

export const PermissionContainer = styled.View({
  width: '100%',
  height: heightPercentage(46),
  marginBottom: heightPercentage(24),
  alignItems: 'center',
  flexDirection: 'row',
});

export const PermissionWrapper = styled.View({
  width: heightPercentage(46),
  height: heightPercentage(46),
  borderRadius: 100,
  backgroundColor: '#F8F7FF',
  marginLeft: widthPercentage(16),
  justifyContent: 'center',
  alignItems: 'center',
});

export const PemissionTextWrapper = styled.View({
  marginLeft: widthPercentage(14),
});

export const PermissionTitle = styled(SubHeadline3)({
  color: theme.colors.grayscale[9],
});

export const PermissionSubTitle = styled(BodyText5)({
  color: theme.colors.grayscale[7],
});

export const PemissionSeperator = styled.View({
  backgroundColor: theme.colors.grayscale[3],
  marginTop: heightPercentage(14),
  marginHorizontal: widthPercentage(16),
  height: heightPercentage(1),
  marginBottom: heightPercentage(32),
});

export const PressableWrapper = styled.View({
  marginTop: heightPercentage(80),
});
