import styled from '@emotion/native';
import {BodyText3, BodyText4, SubHeadline3} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingHorizontal: widthPercentage(16),
  paddingVertical: heightPercentage(24),
});

export const HeaderBox = styled.View({
  justifyContent: 'space-between',
  flexDirection: 'row',
});

export const Title = styled(SubHeadline3)({
  color: theme.colors.grayscale[9],
});

export const SubTitle = styled(BodyText3)({
  color: theme.colors.grayscale[5],
});

export const Contents = styled.View({
  paddingVertical: heightPercentage(16),
});

export const ModifyButton = styled(BodyText4)({
  textDecorationLine: 'underline',
});
