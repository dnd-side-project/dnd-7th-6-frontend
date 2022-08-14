import styled from '@emotion/native';

import {BodyText4} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

interface Props {
  selected?: boolean;
}

export const Container = styled.View({
  flexDirection: 'row',
  paddingVertical: heightPercentage(8),
});

export const Button = styled.Pressable<Props>(({selected = false}) => ({
  paddingVertical: heightPercentage(14),
  marginRight: widthPercentage(8),
  width: widthPercentage(168),
  backgroundColor: selected ? theme.colors.grayscale[3] : theme.colors.grayscale[0],
  borderRadius: 4,
  borderColor: theme.colors.grayscale[3],
  borderWidth: selected ? 0 : 1,
}));

export const ButtonTitle = styled(BodyText4)<Props>(({selected = false}) => ({
  textAlign: 'center',
  textDecorationLine: 'underline',
  color: selected ? theme.colors.grayscale[7] : theme.colors.grayscale[5],
}));
