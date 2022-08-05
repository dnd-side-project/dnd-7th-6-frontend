import styled from '@emotion/native';
import React from 'react';

import {PostListDetailScreenProps} from './PostListDetailScreen';

import {PressableLeftArrowIcon} from 'src/components/utils/Pressables/PressableIcons';
import {SubHeadline2} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const PostListDetailHeaderStyle = ({navigation}: PostListDetailScreenProps) => {
  navigation.setOptions({
    headerShown: false,
  });
};

const Container = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: heightPercentage(56),
});

const ScreenTitle = styled(SubHeadline2)({
  color: theme.colors.grayscale[9],
});
const BackButtonWrapper = styled.View({position: 'absolute', left: widthPercentage(16)});

export const Header = () => {
  return (
    <Container>
      <BackButtonWrapper>
        <PressableLeftArrowIcon />
      </BackButtonWrapper>
      <ScreenTitle>포스트</ScreenTitle>
    </Container>
  );
};
