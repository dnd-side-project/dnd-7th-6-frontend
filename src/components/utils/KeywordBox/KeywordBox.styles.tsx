import styled from '@emotion/native';
import {StyleSheet} from 'react-native';

import {BodyText1} from '../Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.Pressable({
  paddingHorizontal: widthPercentage(16),
  paddingVertical: heightPercentage(14),
  backgroundColor: theme.colors.grayscale[2],
  borderRadius: 8,
});

export const TextWrapper = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const Degree = styled.View<{degree: number}>(({degree}) => ({
  backgroundColor: 'rgba(244,242,255,1)',
  width: `${degree}%`,
  position: 'absolute',
  borderRadius: 8,
  top: 0,
  bottom: 0,
}));

export const RowBox = styled.View({
  flexDirection: 'row',
});

export const Keyword = styled(BodyText1)({
  color: theme.colors.grayscale[8],
});

export const Count = styled(BodyText1)({
  color: theme.colors.primary[1].normal,
});

export const style = StyleSheet.create({
  fastImage: {
    marginRight: widthPercentage(8),
    width: 24,
  },
});
