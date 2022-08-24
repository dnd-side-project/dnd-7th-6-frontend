import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';

import {
  HeaderContainer,
  HeaderImage,
  IconContainer,
  SpecIconWrapper,
} from './RecommendHeader.styles';

import {PressableSearchIcon} from 'src/components/utils/Pressables/PressableIcons';

const RecommendHeader = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <HeaderContainer>
        <HeaderImage source={require('src/assets/images/RecommendScreen/Wordmark.png')} />
        <IconContainer>
          <SpecIconWrapper>
            <PressableSearchIcon
              onPress={() => navigation.navigate('RouteKeywordSearch' as never)}
            />
          </SpecIconWrapper>
        </IconContainer>
      </HeaderContainer>
    </SafeAreaView>
  );
};

export default RecommendHeader;
