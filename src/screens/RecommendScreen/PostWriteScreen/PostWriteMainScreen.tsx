import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native';

import {PostWriteParamList} from '.';

import AddPhotoOrganism from 'src/components/PostWrite/AddPhotoOrganism';
import InputContentsOrganism from 'src/components/PostWrite/InputContentsOrganism';
import InputCustomTagOrganism from 'src/components/PostWrite/InputCustomTagOrganism';
import MoveSelectTagOrganism from 'src/components/PostWrite/MoveSelectTagOrganism';
import SubmitOrganism from 'src/components/PostWrite/SubmitOrganism';
import DismissKeyboardView from 'src/components/utils/DismissKeyboardScrollView';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import {heightPercentage} from 'src/styles/ScreenResponse';

export type PostWriteMainScreenProps = NativeStackScreenProps<PostWriteParamList, 'PostWriteMain'>;

const PostWriteMainScreen = ({navigation}: PostWriteMainScreenProps) => {
  return (
    <SafeAreaView style={{marginBottom: heightPercentage(54)}}>
      <LeftBackHeader onPressBack={() => navigation.goBack()}>새 게시물</LeftBackHeader>
      <DismissKeyboardView>
        <AddPhotoOrganism />
        <InputContentsOrganism />
        <MoveSelectTagOrganism />
        <InputCustomTagOrganism />
        <SubmitOrganism />
      </DismissKeyboardView>
    </SafeAreaView>
  );
};

export default PostWriteMainScreen;
