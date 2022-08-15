import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';

import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';

const PersonalProcessOrganism = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <LeftBackHeader
        onPressBack={() => {
          navigation.goBack();
        }}>
        개인정보 처리 방침
      </LeftBackHeader>
    </SafeAreaView>
  );
};

export default PersonalProcessOrganism;
