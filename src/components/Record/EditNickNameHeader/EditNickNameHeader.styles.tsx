import styled from '@emotion/native';

import {SubHeadline3} from 'src/components/utils/Text';
import {SubHeadline4} from 'src/components/utils/Text/SubHeadline';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  height: heightPercentage(48),
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

export const BackButtonWrapper = styled.View({
  position: 'absolute',
  left: widthPercentage(12),
});

export const Title = styled(SubHeadline3)({
  color: theme.colors.grayscale[9],
});

export const FinishButton = styled.Pressable({
  position: 'absolute',
  right: widthPercentage(16),
});

export const FinishTitle = styled(SubHeadline4)(({isSuccess}: {isSuccess: boolean}) => ({
  color: isSuccess ? theme.colors.grayscale[9] : theme.colors.grayscale[5],
  textDecorationLine: 'underline',
}));
