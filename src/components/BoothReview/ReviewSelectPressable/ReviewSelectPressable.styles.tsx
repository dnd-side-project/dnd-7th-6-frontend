import styled from '@emotion/native';

import {BodyText4} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export type SelectPressableProps = {
  selected: boolean;
};

export const SelectPressable = styled.Pressable(({selected}: SelectPressableProps) => ({
  borderRadius: 20,
  marginLeft: widthPercentage(6),
  marginBottom: heightPercentage(12),
  borderWidth: 1,
  borderColor: selected ? '#8048F8' : theme.colors.grayscale[3],
  height: heightPercentage(38),
  alignSelf: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'row',
  paddingHorizontal: widthPercentage(12),
}));

export const IconWrapper = styled.View({
  alignSelf: 'center',
  width: widthPercentage(18),
  height: widthPercentage(18),
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: widthPercentage(4),
});

export const SelectPressableText = styled(BodyText4)(({selected}: SelectPressableProps) => ({
  alignSelf: 'center',
  color: selected ? '#8048F8' : theme.colors.grayscale[7],
}));
