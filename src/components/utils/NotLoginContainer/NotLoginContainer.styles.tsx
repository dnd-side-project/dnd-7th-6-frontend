import styled from '@emotion/native';

import {BodyText4} from '../Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  flex: 1,
  alignContent: 'center',
});

export const ImageWrapper = styled.View({
  alignSelf: 'center',
  marginTop: heightPercentage(71),
});

export const Title = styled(BodyText4)({
  color: theme.colors.grayscale[7],
  marginTop: heightPercentage(24),
  alignSelf: 'center',
});

export const SubmitWrapper = styled.View({
  alignSelf: 'center',
  width: widthPercentage(343),
  marginTop: heightPercentage(44),
});
