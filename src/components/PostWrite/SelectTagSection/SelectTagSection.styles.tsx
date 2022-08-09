import styled from '@emotion/native';

import {SubHeadline4} from 'src/components/utils/Text/SubHeadline';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingHorizontal: widthPercentage(16),
  paddingVertical: heightPercentage(20),
});

export const TypeOfTag = styled(SubHeadline4)({
  color: theme.colors.grayscale[10],
  paddingBottom: heightPercentage(4),
});

export const ChipContainer = styled.View({
  paddingVertical: heightPercentage(4),
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export const ChipWrapper = styled.View({
  paddingTop: heightPercentage(10),
  paddingRight: widthPercentage(6),
});
