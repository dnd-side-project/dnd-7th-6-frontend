import styled from '@emotion/native';
import {StyleSheet} from 'react-native';

import {BodyText4, BodyText6} from '../Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingVertical: heightPercentage(16),
  paddingHorizontal: widthPercentage(16),
  borderColor: theme.colors.grayscale[3],
  borderBottomWidth: 1,
});

export const RowView = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

export const UserName = styled(BodyText4)({
  color: theme.colors.grayscale[7],
});

export const CreatedAt = styled(BodyText6)({
  color: theme.colors.grayscale[6],
  marginLeft: widthPercentage(6),
});

export const Content = styled(BodyText4)({
  color: theme.colors.grayscale[9],
  paddingTop: heightPercentage(10),
  paddingBottom: heightPercentage(8),
});

export const ImageContainer = styled.View({
  flexDirection: 'row',
  paddingBottom: heightPercentage(6),
});

export const TagWrapper = styled.View({
  paddingTop: heightPercentage(6),
  paddingRight: widthPercentage(4),
});

export const TagContainer = styled.View({
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export const style = StyleSheet.create({
  fastImage: {
    width: widthPercentage(80),
    height: widthPercentage(80),
    marginRight: widthPercentage(6),
  },
});
