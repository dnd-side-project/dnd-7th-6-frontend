import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native';

import {RecommendParamList} from '.';

import PostListOrganism from 'src/components/DiffUserPost/PostListOrganism';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';

export type DiffUserPostScreenProps = NativeStackScreenProps<RecommendParamList, 'DiffUserPost'>;

const DiffUserPostScreen = ({navigation, route}: DiffUserPostScreenProps) => {
  return (
    <SafeAreaView>
      <LeftBackHeader onPressBack={() => navigation.goBack()}>
        @{route.params.username} 님의 다른 사진
      </LeftBackHeader>
      <PostListOrganism userId={route.params.userId} navigation={navigation} />
    </SafeAreaView>
  );
};

export default DiffUserPostScreen;
