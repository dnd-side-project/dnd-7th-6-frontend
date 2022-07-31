import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {RecommendParamList} from '.';

import RecommendDetailContentsOrganism from 'src/components/RecommendDetailContentsOrganism';
import RecommendDetailDiffOrganism from 'src/components/RecommendDetailDiffOrganism';
import RecommendDetailMainFrame from 'src/components/RecommendDetailMainFrame';
import {PressableLeftArrowIcon} from 'src/components/utils/Pressables/PressableIcons';

type DetailScreenProps = NativeStackScreenProps<RecommendParamList, 'RecommendDetail'>;

const RecommendDetailScreen = ({route, navigation}: DetailScreenProps) => {
  const headerStyle = () => {
    navigation.setOptions({
      headerTransparent: true,
      headerLeft: () => <PressableLeftArrowIcon onPress={() => navigation.goBack()} />,
      title: '',
    });
  };

  useEffect(() => {
    headerStyle();
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <RecommendDetailMainFrame id={route.params.postId} />
        <RecommendDetailContentsOrganism id={route.params.postId} />
        <RecommendDetailDiffOrganism />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecommendDetailScreen;
