import styled from '@emotion/native';
import * as React from 'react';
import {Platform} from 'react-native';

import {RecommendScreenProps} from './RecommendScreen';

import {PressableSearchIcon} from 'src/components/utils/Pressables/PressableIcons';
import {Headline2} from 'src/components/utils/Text';
import {widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const RecommendHeaderStyle = ({navigation}: RecommendScreenProps) => {
  navigation.setOptions({
    headerShown: true,
    headerTitle: RecommendHeaderTitle,
    headerRight: RightSearchPressable,
    headerShadowVisible: false,
  });
};

const RecommendHeaderTitle = () => {
  return (
    <HeaderHeadlineView>
      <HeaderText>추천</HeaderText>
    </HeaderHeadlineView>
  );
};

const RightSearchPressable = () => {
  return (
    <SearchPressableView>
      <PressableSearchIcon />
    </SearchPressableView>
  );
};

const HeaderText = styled(Headline2)({color: theme.colors.grayscale[9]});

const HeaderHeadlineView = styled.View({
  flex: 1,
  marginLeft: Platform.OS === 'ios' ? -8 + widthPercentage(16) : -16 + widthPercentage(16),
});

const SearchPressableView = styled.View({
  marginRight: -16 + widthPercentage(24),
});
