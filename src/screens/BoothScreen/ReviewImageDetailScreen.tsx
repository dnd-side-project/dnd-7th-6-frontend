import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import {useDispatch} from 'react-redux';

import {
  Background,
  CloseIconWrapper,
  HeaderContainer,
  HeaderTitle,
} from './ReviewImageDetailScreen.styles';

import {BoothParamList} from '.';

import ImageSliderOrganism from 'src/components/ReviewImageDetail/ImageSliderOrganism/ImageSliderOrganism';
import {PressableCloseIcon} from 'src/components/utils/Pressables/PressableIcons';
import useFocus from 'src/hooks/useFocus';
import useGetPhotoBooth from 'src/querys/useGetPhotoBooth';
import {hideTabBar, showTabBar} from 'src/redux/actions/TabBarAction';

interface HeaderProps {
  boothId?: number;
  onCancel: () => void;
}

const Header = ({boothId, onCancel}: HeaderProps) => {
  const {data} = useGetPhotoBooth(boothId);

  return (
    <HeaderContainer>
      {!!data && <HeaderTitle>{data?.photoBooth.name}</HeaderTitle>}
      <CloseIconWrapper>
        <PressableCloseIcon onPress={onCancel} />
      </CloseIconWrapper>
    </HeaderContainer>
  );
};

export type ReviewImageDetailScreenProps = NativeStackScreenProps<
  BoothParamList,
  'ReviewImageDetailScreen'
>;

const ReviewImageDetailScreen = ({navigation, route}: ReviewImageDetailScreenProps) => {
  const dispatch = useDispatch();

  useFocus(() => {
    dispatch(hideTabBar());
  });

  useEffect(() => {
    const show = () => {
      dispatch(showTabBar());
      return false;
    };
    BackHandler.addEventListener('hardwareBackPress', show);
    return () => BackHandler.removeEventListener('hardwareBackPress', show);
  }, []);

  return (
    <Background>
      <Header
        onCancel={() => {
          navigation.goBack();
          dispatch(showTabBar());
        }}
        boothId={route.params.boothId}
      />
      <ImageSliderOrganism boothId={route.params.boothId} targetImage={route.params.targetImage} />
    </Background>
  );
};

export default ReviewImageDetailScreen;
