import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {SafeAreaView} from 'react-native';

import {BoothParamList} from '.';

import BoothImageOrganism from 'src/components/BoothDetail/BoothImageOrganism/BoothImageOrganism';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';

export type BoothImageScreenProps = NativeStackScreenProps<BoothParamList, 'BoothImageScreen'>;

const BoothImageScreen = ({route}: BoothImageScreenProps) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <LeftBackHeader onPressBack={() => navigation.goBack()}>이 매장에서 찍은 사진</LeftBackHeader>
      <BoothImageOrganism boothId={route.params?.boothId} />
    </SafeAreaView>
  );
};

export default BoothImageScreen;
