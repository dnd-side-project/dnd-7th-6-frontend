import styled from '@emotion/native';

import {BodyText5} from '../utils/Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

interface Props {
  selected: boolean;
  isExistDelete?: boolean;
}

export const Container = styled.Pressable<Props>(({selected, isExistDelete}) => ({
  paddingVertical: isExistDelete ? heightPercentage(7) : heightPercentage(10),
  paddingLeft: widthPercentage(12),
  paddingRight: isExistDelete ? widthPercentage(7) : widthPercentage(10),
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: 40,
  borderWidth: 1,
  borderColor: selected ? theme.colors.primary[1].normal : theme.colors.grayscale[3],
}));

export const Title = styled(BodyText5)<Props>(({selected}) => ({
  color: selected ? theme.colors.primary[1].normal : theme.colors.grayscale[9],
}));

export const Count = styled(BodyText5)<Props>(({selected}) => ({
  color: selected ? theme.colors.primary[1].normal : theme.colors.grayscale[6],
  marginLeft: widthPercentage(4),
}));
