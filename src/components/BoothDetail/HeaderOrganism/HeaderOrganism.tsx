import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';

import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import useGetPhotoBooth from 'src/querys/useGetPhotoBooth';
import {BoothParamList} from 'src/screens/BoothScreen';

interface Props {
  id: number;
  navigation: NativeStackNavigationProp<BoothParamList, 'BoothDetailScreen', undefined>;
}

const HeaderOrganism = ({id, navigation}: Props) => {
  const {data} = useGetPhotoBooth(id);

  return (
    <LeftBackHeader onPressBack={() => navigation.goBack()}>{data?.photoBooth.name}</LeftBackHeader>
  );
};

export default HeaderOrganism;
