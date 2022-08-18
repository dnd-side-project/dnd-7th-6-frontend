import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useDispatch} from 'react-redux';

import {PostListDetailScreenProps} from './PostListDetailScreen';

import {
  PressableLeftArrowIcon,
  PressableSearchIcon,
} from 'src/components/utils/Pressables/PressableIcons';
import {SubHeadline2} from 'src/components/utils/Text';
import {clearFilter} from 'src/redux/actions/PostAction';
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

const SearchButtonWrapper = styled.View({position: 'absolute', right: widthPercentage(16)});

export const Header = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <Container>
      <BackButtonWrapper>
        <PressableLeftArrowIcon
          onPress={() => {
            navigation.goBack();
            dispatch(clearFilter());
          }}
        />
      </BackButtonWrapper>
      <ScreenTitle>포스트</ScreenTitle>
      <SearchButtonWrapper>
        <PressableSearchIcon />
      </SearchButtonWrapper>
    </Container>
  );
};
