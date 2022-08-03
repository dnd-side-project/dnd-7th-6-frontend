import styled from '@emotion/native';

import {SubHeadline2} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const TitleWrapper = styled.View({
  marginLeft: widthPercentage(16),
});

export const OrganismView = styled.View({
  marginTop: heightPercentage(8),
  marginBottom: heightPercentage(52),
});

export const ButtonWrapper = styled.View({
  marginTop: heightPercentage(32),
  paddingLeft: widthPercentage(16),
});

export const TitleText = styled(SubHeadline2)({color: theme.colors.grayscale[9]});
