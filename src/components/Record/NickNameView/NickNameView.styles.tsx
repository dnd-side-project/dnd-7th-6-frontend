import styled from '@emotion/native';

import {SubHeadline3} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const NickNameContainer = styled.View({
  width: '100%',
  height: heightPercentage(16),
  marginTop: heightPercentage(11),
  alignItems: 'center',
  flexDirection: 'row',
});

export const NickNameImageWrapper = styled.View({
  marginLeft: widthPercentage(16),
  marginRight: widthPercentage(4),
});

export const NickNamenIconWrapper = styled.Pressable({
  height: heightPercentage(24),
  marginTop: heightPercentage(4),
  flexDirection: 'row',
});

export const NickNameText = styled(SubHeadline3)({
  color: theme.colors.grayscale[8],
  textDecorationLine: 'underline',
});

export const IconWrapper = styled.View({
  marginLeft: widthPercentage(2),
});
