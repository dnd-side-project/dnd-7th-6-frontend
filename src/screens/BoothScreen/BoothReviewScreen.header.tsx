import React from 'react';

import {ResultImageScreenProps} from './BoothImageReviewScreen';
import {ResultReviewScreenProps} from './BoothResultReviewScreen';
import {StoreReviewScreenProps} from './BoothStoreReviewScreen';

import {PressableLeftArrowIcon} from 'src/components/utils/Pressables/PressableIcons';
import theme from 'src/styles/Theme';

export const ReviewHeaderStyle = ({
  navigation,
}: StoreReviewScreenProps | ResultReviewScreenProps | ResultImageScreenProps) => {
  navigation.setOptions({
    headerLeft: () => <PressableLeftArrowIcon onPress={() => navigation.goBack()} />,
    title: '부스 리뷰 작성',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontFamily: theme.fonts.Body[0].fontFamily,
      fontSize: theme.fonts.Body[0].size,
    },
  });
};
