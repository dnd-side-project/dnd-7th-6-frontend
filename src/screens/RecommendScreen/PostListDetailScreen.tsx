import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {PostListDetailHeaderStyle} from './PostListDetailScreen.header';

import {RecommendParamList} from '.';

export type PostListDetailScreenProps = NativeStackScreenProps<
  RecommendParamList,
  'PostListDetail'
>;

const PostListDetailScreen = ({navigation, route}: PostListDetailScreenProps) => {
  useLayoutEffect(() => {
    PostListDetailHeaderStyle({navigation, route});
  });

  return (
    <SafeAreaView>
      <ScrollView />
    </SafeAreaView>
  );
};

export default PostListDetailScreen;
