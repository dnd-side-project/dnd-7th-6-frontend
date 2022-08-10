import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AddPhotoOrganism from 'src/components/PostWrite/AddPhotoOrganism';
import Boundary from 'src/components/PostWrite/Boundary';
import ContentSection from 'src/components/PostWrite/ContentSection';
import TextFieldOrganism from 'src/components/PostWrite/TextFieldOrganism';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import {PostWriteParamList} from '.';

export type SummaryScreenProps = NativeStackScreenProps<PostWriteParamList, 'Summary'>;

const SummaryScreen = ({navigation}: SummaryScreenProps) => {
  return (
    <SafeAreaView>
      <LeftBackHeader onPressBack={() => navigation.goBack()}>새 게시물</LeftBackHeader>
      <ScrollView>
        <AddPhotoOrganism />
        <TextFieldOrganism />
        <Boundary />
        <ContentSection
          title="선택 태그"
          onPressRightIcon={() => navigation.navigate('SelectTag')}></ContentSection>
        <ContentSection
          title="직접 태그"
          subTitle="(최대 4개)"
          onPressRightIcon={() => navigation.navigate('SelectTag')}></ContentSection>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SummaryScreen;
