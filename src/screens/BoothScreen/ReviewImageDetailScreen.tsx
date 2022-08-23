import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';

import {
  Background,
  CloseIconWrapper,
  HeaderContainer,
  HeaderTitle,
} from './ReviewImageDetailScreen.styles';

import {BoothParamList} from '.';

import {PressableCloseIcon} from 'src/components/utils/Pressables/PressableIcons';
import useFocus from 'src/hooks/useFocus';
import useGetPhotoBooth from 'src/querys/useGetPhotoBooth';
import {hideTabBar, showTabBar} from 'src/redux/actions/TabBarAction';
import {heightPercentage} from 'src/styles/ScreenResponse';

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

  const goBack = () => {
    if (route.params.isStorage) {
      navigation.reset({
        routes: [{name: 'StorageScreen' as never}],
        index: 0,
      });
    } else {
      navigation.goBack();
    }
  };

  useFocus(() => {
    dispatch(hideTabBar());
  });

  useEffect(() => {
    const show = () => {
      dispatch(showTabBar());
      goBack();
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', show);
    return () => BackHandler.removeEventListener('hardwareBackPress', show);
  }, []);

  return (
    <Background>
      <Header
        onCancel={() => {
          goBack();
          dispatch(showTabBar());
        }}
        boothId={route.params?.boothId}
      />
      <FastImage
        source={{uri: route.params.targetImage.imageUrl}}
        style={{height: heightPercentage(514)}}
      />
    </Background>
  );
};

export default ReviewImageDetailScreen;
