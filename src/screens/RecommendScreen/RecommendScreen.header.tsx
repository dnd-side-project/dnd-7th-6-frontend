import styled from '@emotion/native';
import * as React from 'react';

import {RecommendScreenProps} from './RecommendScreen';

import {Headline2} from 'src/components/utils/Text';
import {widthPercentage} from 'src/styles/ScreenResponse';

export const RecommendHeaderStyle = ({navigation}: RecommendScreenProps) => {
  navigation.setOptions({
    headerShown: true,
    headerTitle: RecommendHeaderTitle,
    headerShadowVisible: false,
  });
};

const RecommendHeaderTitle = () => {
  return (
    <HeaderHeadlineView>
      <Headline2>추천</Headline2>
    </HeaderHeadlineView>
  );
};

const HeaderHeadlineView = styled.View({
  flex: 1,
  marginLeft: -8 + widthPercentage(16), //Native  Issue 발생
});
