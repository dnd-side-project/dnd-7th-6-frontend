import React from 'react';

import {BoothTagInputScreenProps} from './BoothTagInputScreen';

import {PressableLeftArrowIcon} from 'src/components/utils/Pressables/PressableIcons';
import theme from 'src/styles/Theme';

export const BoothTagHeaderStyle = ({navigation}: BoothTagInputScreenProps) => {
  navigation.setOptions({
    headerLeft: () => {
      return (
        <PressableLeftArrowIcon
          onPress={() => {
            navigation.goBack();
          }}
        />
      );
    },
    title: '태그 직접 입력',
    headerTitleAlign: 'center',
    headerShadowVisible: false,
    headerTitleStyle: {
      fontFamily: theme.fonts.Body[0].fontFamily,
      fontSize: theme.fonts.Body[0].size,
    },
  });
};
