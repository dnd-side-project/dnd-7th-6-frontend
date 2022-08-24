import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';

import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import useGetPhotoBooth from 'src/querys/useGetPhotoBooth';
import {BoothParamList} from 'src/screens/BoothScreen';

interface Props {
  id: number;
  navigation: NativeStackNavigationProp<BoothParamList, 'BoothDetailScreen', undefined>;
  route: any;
}

const HeaderOrganism = ({id, navigation, route}: Props) => {
  const {data} = useGetPhotoBooth(id);

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

  useEffect(() => {
    const back = () => {
      goBack();
      return false;
    };
    const handler = BackHandler.addEventListener('hardwareBackPress', back);
    return handler.remove();
  }, []);

  return <LeftBackHeader onPressBack={goBack}>{data?.photoBooth.name}</LeftBackHeader>;
};

export default HeaderOrganism;
