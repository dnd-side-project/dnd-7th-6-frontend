import styled from '@emotion/native';

import {SubHeadline2} from '../utils/Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const TitleText = styled(SubHeadline2)({
  color: theme.colors.grayscale[9],
  marginBottom: heightPercentage(16),
  marginLeft: widthPercentage(16),
});

export const RecommendSituationPoseView = styled.View({
  marginVertical: heightPercentage(52),
});

export const BannerViewWrapper = styled.View({
  marginTop: heightPercentage(52),
});
