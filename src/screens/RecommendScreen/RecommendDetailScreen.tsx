import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {RecommendParamList} from '.';

import RecommendDetailContentsOrganism from 'src/components/RecommendDetailContentsOrganism';
import RecommendDetailDiffOrganism from 'src/components/RecommendDetailDiffOrganism';
import RecommendDetailMainFrame from 'src/components/RecommendDetailMainFrame';
import {DetailHeaderStyle} from './RecommendDetailScreen.header';

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
