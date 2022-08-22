import styled from '@emotion/native';

import {SubHeadline2} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Background = styled.SafeAreaView({
  height: '100%',
  backgroundColor: '#000',
});

export const HeaderContainer = styled.View({
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  height: heightPercentage(46),
  marginBottom: heightPercentage(51),
});

export const HeaderTitle = styled(SubHeadline2)({
  color: theme.colors.grayscale[1],
  alignSelf: 'center',
});

export const CloseIconWrapper = styled.View({
  right: widthPercentage(16),
  position: 'absolute',
});
