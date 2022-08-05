import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';

import {PostListDetailHeaderStyle} from './PostListDetailScreen.header';

import {RecommendParamList} from '.';

import FilterSheetOrganism from 'src/components/PostListDetail/FilterSheetOrganism';

export type PostListDetailScreenProps = NativeStackScreenProps<
  RecommendParamList,
  'PostListDetail'
>;

const PostListDetailScreen = (props: PostListDetailScreenProps) => {
  useLayoutEffect(() => {
    PostListDetailHeaderStyle(props);
  });

  return <FilterSheetOrganism />;
};

export default PostListDetailScreen;
