import styled from '@emotion/native';

import {BodyText4} from '../utils/Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.Pressable<{selected: boolean}>(({selected}) => ({
  paddingVertical: heightPercentage(7),
  paddingRight: widthPercentage(6),
  paddingLeft: widthPercentage(12),
  height: heightPercentage(38),
  flexDirection: 'row',
  borderRadius: 20,
  shadowOffset: {width: 0, height: 4},
  shadowRadius: 8,
  shadowOpacity: 0.1,
  borderColor: selected ? theme.colors.primary[1].normal : theme.colors.grayscale[3],
  borderWidth: 1,
  alignSelf: 'flex-start',
  alignItems: 'center',
  backgroundColor: theme.colors.grayscale[1],
  marginLeft: widthPercentage(16),
}));

export const Title = styled(BodyText4)<{selected: boolean}>(({selected}) => ({
  color: selected ? theme.colors.primary[1].normal : theme.colors.grayscale[8],
}));

export const IconContainer = styled.View({
  width: widthPercentage(20),
  height: widthPercentage(20),
  marginRight: widthPercentage(6),
  backgroundColor: theme.colors.grayscale[3],
});
