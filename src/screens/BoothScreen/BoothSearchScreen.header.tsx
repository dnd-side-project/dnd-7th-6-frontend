import React from 'react';

import {BoothScreenProps} from './BoothScreen';

import MapSearchTextInput from 'src/components/MapSearchTextInput';
import {PressableLeftArrowIcon} from 'src/components/utils/Pressables/PressableIcons';

export const BoothSearchHeaderStyle = ({navigation}: BoothScreenProps) => {
  navigation.setOptions({
    headerShown: true,
    headerShadowVisible: false,
    headerTransparent: true,
    headerTitle: () => <MapSearchTextInput />,
    headerLeft: () => <PressableLeftArrowIcon onPress={() => navigation.goBack()} />,
  });
};
