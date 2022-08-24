import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

import {RecommendParamList} from '.';

import FilterSheetOrganism from 'src/components/PostListDetail/FilterSheetOrganism';

export type PostListDetailScreenProps = NativeStackScreenProps<
  RecommendParamList,
  'PostListDetail'
>;

const PostListDetailScreen = () => {
  return <FilterSheetOrganism />;
};

export default PostListDetailScreen;
