import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';
import {useDispatch} from 'react-redux';

import {PressableWrapper, TermsWebView} from './LocationTermsOrganism.styles';

import ReviewNextPressable from 'src/components/BoothReview/ReviewNextPressable';
import ActivityIndicator from 'src/components/utils/ActivityIndicator';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import {changeLocationTerms} from 'src/redux/actions/TermsAction';

const LocationTermsOrganism = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const approveHandler = () => {
    dispatch(changeLocationTerms(true));
    navigation.goBack();
  };
  return (
    <>
      <SafeAreaView>
        <LeftBackHeader
          onPressBack={() => {
            navigation.goBack();
          }}>
          (필수) 개인정보 이용약관
        </LeftBackHeader>
      </SafeAreaView>
      <ActivityIndicator loading={isLoading}>
        <TermsWebView>
          <WebView
            onLoadEnd={() => setIsLoading(false)}
            source={{uri: 'https://devung.notion.site/ad0edc688dba4b168887b0ddac8a33c1'}}
          />
        </TermsWebView>
        <PressableWrapper>
          <ReviewNextPressable onPress={approveHandler}>동의</ReviewNextPressable>
        </PressableWrapper>
      </ActivityIndicator>
    </>
  );
};

export default LocationTermsOrganism;
