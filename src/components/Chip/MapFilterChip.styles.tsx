import styled from '@emotion/native';

import {BodyText4} from '../utils/Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export type SelectPressableProps = {
  selected: boolean;
};

export const SelectPressable = styled.Pressable(({selected}: SelectPressableProps) => ({
  borderRadius: 20,
  marginLeft: widthPercentage(6),
  marginBottom: heightPercentage(12),
  borderColor: selected ? theme.colors.primary[1].normal : theme.colors.grayscale[3],
  borderWidth: selected ? 1 : 0,
  height: heightPercentage(38),
  alignSelf: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'row',
  paddingHorizontal: widthPercentage(12),
  backgroundColor: theme.colors.grayscale[1],
  shadowOffset: {width: 0, height: 4},
  shadowRadius: 8,
  shadowOpacity: 0.1,
}));

export const SelectPressableText = styled(BodyText4)(({selected}: SelectPressableProps) => ({
  alignSelf: 'center',
  color: selected ? theme.colors.primary[1].normal : theme.colors.grayscale[9],
}));
