import styled from '@emotion/native';

import {SubHeadline2} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  flexDirection: 'row',
  paddingHorizontal: widthPercentage(16),
});

export const LabelWrapper = styled.View({
  flexDirection: 'row',
  marginRight: heightPercentage(4),
  paddingHorizontal: widthPercentage(8),
  paddingVertical: heightPercentage(6),
});

export const Label = styled(SubHeadline2)<{selected: boolean}>(({selected}) => ({
  marginRight: widthPercentage(2),
  color: selected ? theme.colors.grayscale[8] : theme.colors.grayscale[5],
}));

export const IconWrapper = styled.View({
  width: 6,
  height: 6,
});
