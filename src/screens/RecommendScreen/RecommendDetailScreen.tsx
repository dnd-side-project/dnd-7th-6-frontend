import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {DetailHeaderStyle} from './RecommendDetailScreen.header';

import {RecommendParamList} from '.';

import RecommendDetailContentsOrganism from 'src/components/RecommendDetail/ContentsOrganism';
import RecommendDetailDiffOrganism from 'src/components/RecommendDetail/DiffOrganism';
import RecommendDetailMainFrame from 'src/components/RecommendDetail/MainFrame';

export type DetailScreenProps = NativeStackScreenProps<RecommendParamList, 'RecommendDetail'>;

const RecommendDetailScreen = ({navigation, route}: DetailScreenProps) => {
  useLayoutEffect(() => {
    DetailHeaderStyle({navigation, route});
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <RecommendDetailMainFrame id={route.params.postId} />
        <RecommendDetailContentsOrganism id={route.params.postId} />
        <RecommendDetailDiffOrganism id={route.params.postId} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecommendDetailScreen;
