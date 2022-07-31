import React from 'react';

import {DetailScreenProps} from './RecommendDetailScreen';

import {PressableLeftArrowIcon} from 'src/components/utils/Pressables/PressableIcons';

export const DetailHeaderStyle = ({navigation}: DetailScreenProps) => {
  navigation.setOptions({
    headerTransparent: true,
    headerLeft: () => <PressableLeftArrowIcon onPress={() => navigation.goBack()} />,
    title: '',
  });
};
