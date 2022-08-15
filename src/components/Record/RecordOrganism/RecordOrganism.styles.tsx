import styled from '@emotion/native';

import {heightPercentage} from 'src/styles/ScreenResponse';

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
  marginBottom: heightPercentage(250),
  alignSelf: 'center',
});

export const ReviewFlatList = styled.FlatList({
  width: '100%',
  marginBottom: heightPercentage(250),
  alignSelf: 'center',
});
