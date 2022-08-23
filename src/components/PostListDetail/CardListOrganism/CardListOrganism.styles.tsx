import styled from '@emotion/native';
import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {BodyText3} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

const {height} = Dimensions.get('window');

export const Container = styled.View({
  paddingHorizontal: widthPercentage(10.5),
});

export const FlatListWrapper = styled.View({
  justifyContent: 'center',
  paddingBottom: heightPercentage(54),
<<<<<<< HEAD
  height: height - heightPercentage(130),
=======
  height: height - heightPercentage(130) - getStatusBarHeight(true),
>>>>>>> bfb0a80974ab379b3aee525eaff09a9de3bb4acf
});

export const PostDetailFlatList = styled.FlatList({
  height: '100%',
});

export const SortButtonWrapper = styled.Pressable({
  paddingHorizontal: widthPercentage(8),
  paddingVertical: heightPercentage(6),
});

export const ListHeader = styled.View({
  paddingVertical: heightPercentage(2),
  marginBottom: heightPercentage(-12),
  flexDirection: 'row',
});

export const SortingButton = styled(BodyText3)<{selected: boolean}>(({selected}) => ({
  textDecorationLine: 'underline',
  color: selected ? theme.colors.grayscale[8] : theme.colors.grayscale[5],
}));
