import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  backgroundColor: 'white',
  paddingBottom: heightPercentage(30),
});

export const TitleContainer = styled.View({
  flexDirection: 'row',
  width: widthPercentage(343),
  height: heightPercentage(56),
  marginHorizontal: widthPercentage(16),
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Title = styled.Text({
  color: theme.colors.grayscale[10],
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
