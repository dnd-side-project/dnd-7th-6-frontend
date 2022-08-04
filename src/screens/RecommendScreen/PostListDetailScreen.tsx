import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {SafeAreaView} from 'react-native';

import {PostListDetailHeaderStyle} from './PostListDetailScreen.header';

import {RecommendParamList} from '.';

import CardListOrganism from 'src/components/PostListDetail/CardListOrganism';
import FilterOrganism from 'src/components/PostListDetail/FilterOrganism';

export type PostListDetailScreenProps = NativeStackScreenProps<
  RecommendParamList,
  'PostListDetail'
>;

const PostListDetailScreen = (props: PostListDetailScreenProps) => {
  useLayoutEffect(() => {
    PostListDetailHeaderStyle(props);
  });

  return (
    <SafeAreaView>
      <FilterOrganism />
      <CardListOrganism />
    </SafeAreaView>
  );
};

export default PostListDetailScreen;
