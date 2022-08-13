import styled from '@emotion/native';

import {SubHeadline3} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingHorizontal: widthPercentage(16),
});

export const ReturnButton = styled.Pressable({
  paddingVertical: heightPercentage(14),
  paddingHorizontal: widthPercentage(16),
  borderRadius: 8,
  backgroundColor: theme.colors.grayscale[2],
  width: '100%',
  marginTop: heightPercentage(10),
});

export const ReturnButtonTitle = styled(SubHeadline3)({
  color: theme.colors.grayscale[6],
  textAlign: 'center',
});
