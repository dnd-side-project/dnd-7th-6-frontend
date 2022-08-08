import styled from '@emotion/native';

import {BodyText3, BodyText4} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingVertical: heightPercentage(24),
  paddingHorizontal: widthPercentage(16),
});

export const SubLabel = styled(BodyText3)({
  color: theme.colors.grayscale[5],
});

export const FakeInputText = styled.Pressable({
  backgroundColor: theme.colors.grayscale[2],
  borderRadius: 8,
  paddingVertical: heightPercentage(10),
  paddingHorizontal: widthPercentage(16),
  marginVertical: heightPercentage(18),
});

export const FakePlaceholder = styled(BodyText4)({
  color: theme.colors.grayscale[6],
  textDecorationLine: 'underline',
});
