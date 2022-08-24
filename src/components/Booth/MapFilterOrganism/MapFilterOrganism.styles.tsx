import styled from '@emotion/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

interface Props {
  selected: boolean;
}

export const FilterScollView = styled.ScrollView({
  marginTop: getStatusBarHeight(true) + 54,
});

export const BrandContainer = styled.View({
  flexDirection: 'column',
});

export const DropdownContainer = styled.View(({isSelected}: {isSelected: boolean}) => ({
  shadowOffset: {width: 0, height: 4},
  shadowRadius: 8,
  shadowOpacity: 0.1,
  width: widthPercentage(100),
  height: heightPercentage(208),
  backgroundColor: theme.colors.grayscale[1],
  borderColor: isSelected ? '#A87EFF' : theme.colors.grayscale[5],
  borderWidth: 1,
  borderRadius: 8,
  marginLeft: widthPercentage(16),
  marginTop: heightPercentage(4),
}));

export const DropdownObject = styled.Pressable(({selected}: Props) => ({
  marginHorizontal: widthPercentage(6),
  marginVertical: heightPercentage(2),
  paddingHorizontal: widthPercentage(10),
  paddingVertical: heightPercentage(8),
  width: widthPercentage(88),
  height: heightPercentage(36),
  borderRadius: 4,
  backgroundColor: selected ? '#F6F2FF' : theme.colors.grayscale[1],
}));

export const DropdownText = styled.Text(({selected}: Props) => ({
  color: selected ? theme.colors.primary[1].normal : theme.colors.grayscale[8],
  fontSize: selected ? theme.fonts.SubHeadline[3].size : theme.fonts.Body[2].size,
  fontFamily: selected ? theme.fonts.SubHeadline[3].fontFamily : theme.fonts.Body[2].fontFamily,
  lineHeight: theme.fonts.Body[2].lineHeight,
}));
