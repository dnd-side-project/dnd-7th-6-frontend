import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native';

import {PostWriteParamList} from '.';

import ExitNavigationOrganism from 'src/components/PostWrite/ExitNavigationOrganism/ExitNavigationOrganism';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';

export type ExitPostWriteScreenProps = NativeStackScreenProps<PostWriteParamList, 'ExitPostWrite'>;

const ExitPostWriteScreen = ({navigation}: ExitPostWriteScreenProps) => {
  return (
    <SafeAreaView>
      <LeftBackHeader onPressBack={() => navigation.goBack()} />
      <ExitNavigationOrganism />
    </SafeAreaView>
  );
};

export default ExitPostWriteScreen;
