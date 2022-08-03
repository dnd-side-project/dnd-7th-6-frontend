import React from 'react';

import {DetailScreenProps} from './BoothDetailScreen';

import {PressableLeftArrowIcon} from 'src/components/utils/Pressables/PressableIcons';

export const DetailHeaderStyle = ({navigation}: DetailScreenProps) => {
  navigation.setOptions({
    headerLeft: () => <PressableLeftArrowIcon onPress={() => navigation.goBack()} />,
    title: '',
  });
};
