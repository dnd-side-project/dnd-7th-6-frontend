import styled from '@emotion/native';

import {BodyText3, BodyText4, SubHeadline2} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const TitleWrapper = styled.View({
  marginLeft: widthPercentage(16),
  flexDirection: 'column',
});

export const TextnIconWrapper = styled.View({
  flexDirection: 'row',
  marginBottom: heightPercentage(4),
});

export const OrganismView = styled.View({
  marginTop: heightPercentage(8),
});

export const TitleIcon = styled.View({
  marginRight: widthPercentage(8),
  width: heightPercentage(24),
  height: heightPercentage(24),
  backgroundColor: theme.colors.grayscale[3],
});

export const ButtonPressable = styled.Pressable({
  marginTop: heightPercentage(24),
  width: widthPercentage(166),
  height: heightPercentage(48),
  borderRadius: 8,
  borderWidth: 1,
  borderColor: theme.colors.grayscale[3],
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
});

export const CardContainer = styled.View({
  alignItems: 'center',
  justifyContent: 'center',
  height: heightPercentage(830),
});

export const ButtonText = styled(BodyText3)({color: theme.colors.grayscale[7]});
export const TitleText = styled(SubHeadline2)({color: theme.colors.grayscale[9]});
export const SubTitleText = styled(BodyText4)({color: theme.colors.grayscale[7]});
