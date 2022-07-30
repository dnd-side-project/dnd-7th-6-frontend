import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingHorizontal: widthPercentage(16),
  backgroundColor: 'white',
});

export const TitleContainer = styled.View({
  flexDirection: 'row',
  height: heightPercentage(56),
  backgroundColor: theme.colors.grayscale[2],
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Title = styled.Text({
  color: theme.colors.grayscale[10],
});

export const NumOfDiff = styled.Text({
  color: theme.colors.grayscale[7],
});

export const IconWrapper = styled.View({
  paddingHorizontal: widthPercentage(14),
  paddingVertical: heightPercentage(16),
});

export const CardContainer = styled.View({
  flexWrap: 'wrap',
  alignContent: 'center',
});

export const CardWrapper = styled.View({
  paddingVertical: heightPercentage(16),
  marginHorizontal: widthPercentage(5.5),
});
