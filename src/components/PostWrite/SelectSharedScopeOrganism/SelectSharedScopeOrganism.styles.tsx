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
  borderRadius: 8,
  borderColor: selected ? theme.colors.primary[1].normal : theme.colors.grayscale[3],
  borderWidth: 1,
}));

export const ButtonTitle = styled(BodyText4)<Props>(({selected = false}) => ({
  textAlign: 'center',
  textDecorationLine: 'underline',
  color: selected ? theme.colors.primary[1].normal : theme.colors.grayscale[7],
}));
