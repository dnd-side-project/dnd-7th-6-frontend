import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';

const PersonalProcessOrganism = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView>
        <LeftBackHeader
          onPressBack={() => {
            navigation.goBack();
          }}>
          개인정보 처리 방침
        </LeftBackHeader>
      </SafeAreaView>
      <WebView source={{uri: 'https://devung.notion.site/07a296e64aaa47f9a18e3353134cc9ef'}} />
    </>
  );
};

export default PersonalProcessOrganism;
