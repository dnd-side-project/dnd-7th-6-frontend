import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Dimensions, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import RecommendDetailScreenHeader from './RecommendDetailScreen.header';

import {RecommendParamList} from '.';

import RecommendDetailContentsOrganism from 'src/components/RecommendDetail/ContentsOrganism';
import RecommendDetailDiffOrganism from 'src/components/RecommendDetail/DiffOrganism';
import RecommendDetailMainFrame from 'src/components/RecommendDetail/MainFrame';
import {heightPercentage} from 'src/styles/ScreenResponse';

export type DetailScreenProps = NativeStackScreenProps<RecommendParamList, 'RecommendDetail'>;

const RecommendDetailScreen = ({navigation, route}: DetailScreenProps) => {
  return (
    <SafeAreaView>
      <RecommendDetailScreenHeader
        navigation={navigation}
        postId={route.params.postId}
        isRecord={route.params.isRecord}
      />
      <ScrollView style={{height: Dimensions.get('window').height - heightPercentage(125)}}>
        <RecommendDetailMainFrame id={route.params.postId} />
        <RecommendDetailContentsOrganism id={route.params.postId} />
        <RecommendDetailDiffOrganism id={route.params.postId} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecommendDetailScreen;
