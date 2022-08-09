import styled from '@emotion/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {BodyText3} from '../utils/Text';

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

export const DropdownContainer = styled.View({
  shadowOffset: {width: 0, height: 4},
  shadowRadius: 8,
  shadowOpacity: 0.1,
  width: widthPercentage(100),
  height: heightPercentage(208),
  backgroundColor: theme.colors.grayscale[1],
  borderRadius: 8,
  marginLeft: widthPercentage(16),
  marginTop: heightPercentage(4),
});

export const DropdownObject = styled.Pressable(({selected}: Props) => ({
  marginHorizontal: widthPercentage(6),
  marginVertical: heightPercentage(2),
  paddingHorizontal: widthPercentage(10),
  paddingVertical: heightPercentage(8),
  borderRadius: 4,
  backgroundColor: selected ? '#F6F2FF' : theme.colors.grayscale[1],
}));

export const DropdownText = styled(BodyText3)(({selected}: Props) => ({
  color: selected ? theme.colors.primary[1].normal : theme.colors.grayscale[8],
}));
