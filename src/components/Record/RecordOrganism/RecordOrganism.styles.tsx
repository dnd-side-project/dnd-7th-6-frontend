import styled from '@emotion/native';
import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import valueOfPlatform from 'src/utils/valueOfPlatform';

export const NickNameContainer = styled.View({
  width: '100%',
  height: heightPercentage(16),
  marginTop: heightPercentage(11),
});

export const SlideViewContainer = styled.View({
  marginTop: heightPercentage(48),
  width: '100%',
});

export const PostFlatList = styled.FlatList({
  paddingHorizontal: heightPercentage(12),
  marginBottom: valueOfPlatform({
    ios: heightPercentage(210) + getStatusBarHeight(true),
    android: heightPercentage(160),
  }),
});

export const ReviewFlatList = styled.FlatList({
  width: '100%',
  marginBottom: valueOfPlatform({
    ios: heightPercentage(210) + getStatusBarHeight(true),
    android: heightPercentage(160),
  }),
  alignSelf: 'center',
});

export const CardWrapper = styled.View({
  paddingHorizontal: widthPercentage(5.5),
  paddingVertical: heightPercentage(16),
});

export const style = StyleSheet.create({
  recordFeedCard: {
    width: widthPercentage(166),
    height: heightPercentage(250),
    borderRadius: 4,
  },
});
