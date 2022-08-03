import styled from '@emotion/native';

import {BodyText4, Headline2} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingVertical: heightPercentage(16),
  paddingHorizontal: widthPercentage(16),
});

export const IconContainer = styled.View({
  justifyContent: 'flex-end',
  flexDirection: 'row',
  marginBottom: heightPercentage(2),
});

export const IconWrapper = styled.View({
  marginLeft: widthPercentage(12),
});

export const Title = styled(Headline2)({
  color: theme.colors.grayscale[10],
  paddingVertical: heightPercentage(10),
});

export const Contents = styled(BodyText4)({
  color: theme.colors.grayscale[8],
  paddingVertical: heightPercentage(4),
});

export const ButtonWrapper = styled.View({
  marginVertical: heightPercentage(50),
});
