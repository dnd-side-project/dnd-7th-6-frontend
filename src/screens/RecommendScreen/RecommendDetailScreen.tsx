import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Dimensions, SafeAreaView, ScrollView} from 'react-native';

import {RecommendParamList} from '.';

import RecommendDetailContentsOrganism from 'src/components/RecommendDetail/ContentsOrganism';
import RecommendDetailDiffOrganism from 'src/components/RecommendDetail/DiffOrganism';
import RecommendDetailMainFrame from 'src/components/RecommendDetail/MainFrame';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import {heightPercentage} from 'src/styles/ScreenResponse';

export type DetailScreenProps = NativeStackScreenProps<RecommendParamList, 'RecommendDetail'>;

const RecommendDetailScreen = ({navigation, route}: DetailScreenProps) => {
  return (
    <SafeAreaView>
      <LeftBackHeader onPressBack={() => navigation.goBack()} />
      <ScrollView style={{height: Dimensions.get('window').height - heightPercentage(125)}}>
        <RecommendDetailMainFrame id={route.params.postId} />
        <RecommendDetailContentsOrganism id={route.params.postId} />
        <RecommendDetailDiffOrganism id={route.params.postId} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecommendDetailScreen;
