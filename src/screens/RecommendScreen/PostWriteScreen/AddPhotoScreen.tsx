import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {SafeAreaView} from 'react-native';

import {PostWriteParamList} from '.';

import AddPhotoOrganism from 'src/components/PostWrite/AddPhotoOrganism';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import {heightPercentage} from 'src/styles/ScreenResponse';
import AddPhotoNextButton from 'src/components/PostWrite/NextButtons/AddPhoto';
import {useDispatch} from 'react-redux';
import {showTabBar} from 'src/redux/actions/TabBarAction';

export type PostWriteMainScreenProps = NativeStackScreenProps<PostWriteParamList, 'PostWriteMain'>;

const PostWriteMainScreen = ({navigation}: PostWriteMainScreenProps) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{marginBottom: heightPercentage(54)}}>
      <LeftBackHeader
        onPressBack={() => {
          dispatch(showTabBar());
          navigation.goBack();
        }}>
        새 게시물
      </LeftBackHeader>
      <AddPhotoOrganism />
      <AddPhotoNextButton />
    </SafeAreaView>
  );
};

export default PostWriteMainScreen;
