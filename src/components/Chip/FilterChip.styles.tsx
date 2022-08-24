import styled from '@emotion/native';

import {BodyText3, BodyText5} from '../utils/Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

interface Props {
  selected: boolean;
  isExistDelete?: boolean;
  isGray?: boolean;
}

export const Container = styled.Pressable<Props>(({selected, isExistDelete, isGray}) => ({
  paddingVertical: isExistDelete ? heightPercentage(7) : heightPercentage(10),
  paddingLeft: widthPercentage(12),
  paddingRight: isExistDelete ? widthPercentage(7) : widthPercentage(10),
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: 40,
  borderWidth: isGray ? 0 : 1,
  borderColor: selected ? theme.colors.primary[1].normal : theme.colors.grayscale[3],
  backgroundColor: isGray ? theme.colors.grayscale[2] : theme.colors.grayscale[1],
}));

export const Title = styled(BodyText3)<Props>(({selected, isGray}) => ({
  color: isGray
    ? theme.colors.grayscale[9]
    : selected
    ? theme.colors.primary[1].normal
    : theme.colors.grayscale[9],
}));

export const Count = styled(BodyText5)<Props>(({selected}) => ({
  color: selected ? theme.colors.primary[1].normal : theme.colors.grayscale[6],
  marginLeft: widthPercentage(4),
}));
