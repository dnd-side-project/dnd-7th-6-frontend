import React from 'react';

import {PostListDetailScreenProps} from './PostListDetailScreen';

import {PressableLeftArrowIcon} from 'src/components/utils/Pressables/PressableIcons';
import theme from 'src/styles/Theme';

const headerTitleStyle = {
  color: theme.colors.grayscale[9],
  fontFamily: theme.fonts.SubHeadline[2].fontFamily,
  fontSize: theme.fonts.SubHeadline[2].size,
};

export const PostListDetailHeaderStyle = ({navigation}: PostListDetailScreenProps) => {
  navigation.setOptions({
    headerShadowVisible: false,
    headerTitleAlign: 'center',
    headerTitleStyle: headerTitleStyle,
    headerLeft: () => <PressableLeftArrowIcon onPress={() => navigation.goBack()} />,
    title: '포스트',
  });
};
