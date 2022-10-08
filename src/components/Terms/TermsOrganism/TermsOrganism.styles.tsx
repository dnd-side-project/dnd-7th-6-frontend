import styled from '@emotion/native';

import {BodyText1, BodyText3, Headline3, SubHeadline2} from '../../utils/Text';

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

export const TitleBold = styled(Headline3)({
  color: theme.colors.primary[0].normal,
  marginTop: heightPercentage(48),
  marginLeft: widthPercentage(16),
});

export const Subtitle = styled(SubHeadline2)({
  color: theme.colors.grayscale[10],
  marginLeft: widthPercentage(16),
  marginBottom: heightPercentage(26),
});

export const PressableWrapper = styled.View({
  marginTop: heightPercentage(24),
});

export const TermsContainer = styled.View({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: widthPercentage(16),
  marginBottom: heightPercentage(24),
});

export const TermsTextButton = styled(BodyText3)({
  color: theme.colors.grayscale[7],
  textDecorationLine: 'underline',
});

export const EntirelyTermsView = styled.View({
  backgroundColor: theme.colors.grayscale[2],
  marginHorizontal: widthPercentage(16),
  paddingHorizontal: widthPercentage(16),
  height: heightPercentage(60),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: heightPercentage(200),
});

export const EntirelyTermsButton = styled.View({});

export const EntirelyText = styled(BodyText1)({
  color: theme.colors.grayscale[8],
});
