import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';

import {BoothParamList} from '.';

import BoothImageOrganism from 'src/components/BoothDetail/BoothImageOrganism';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';

export type BoothImageScreenProps = NativeStackScreenProps<BoothParamList, 'BoothImageScreen'>;

const BoothImageScreen = ({route}: BoothImageScreenProps) => {
  const navigation = useNavigation();

  return (
    <>
      <LeftBackHeader onPressBack={() => navigation.goBack()}>이 매장에서 찍은 사진</LeftBackHeader>
      <BoothImageOrganism boothId={route.params?.boothId} />
    </>
  );
};

export default BoothImageScreen;
