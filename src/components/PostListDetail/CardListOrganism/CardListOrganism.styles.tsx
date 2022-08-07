import styled from '@emotion/native';
import {Dimensions} from 'react-native';

import {BodyText3} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

const {height} = Dimensions.get('window');

export const Container = styled.View({
  paddingHorizontal: widthPercentage(10.5),
});

export const FlatListWrapper = styled.View({
  paddingBottom: heightPercentage(54),
});

export const PostDetailFlatList = styled.FlatList({
  height: height - heightPercentage(194),
});

export const SortButtonWrapper = styled.Pressable({
  paddingHorizontal: widthPercentage(10),
  paddingVertical: heightPercentage(8),
});

export const ListHeader = styled.View({
  paddingHorizontal: widthPercentage(16),
  paddingVertical: heightPercentage(4),
  marginBottom: heightPercentage(-12),
  alignItems: 'flex-end',
});

export const SortingButton = styled(BodyText3)({
  textDecorationLine: 'underline',
  color: theme.colors.grayscale[8],
});
