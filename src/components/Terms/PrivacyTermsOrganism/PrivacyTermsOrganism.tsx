import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';
import {useDispatch} from 'react-redux';

import {PressableWrapper, TermsWebView} from './PrivacyTermsOrganism.styles';

import ReviewNextPressable from 'src/components/BoothReview/ReviewNextPressable';
import ActivityIndicator from 'src/components/utils/ActivityIndicator';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import {changePrivacyTerms} from 'src/redux/actions/TermsAction';

const PrivacyTermsOrganism = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const approveHandler = () => {
    dispatch(changePrivacyTerms(true));
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
            source={{uri: 'https://devung.notion.site/914a357d2f64414fa28d9d9b3ee62538'}}
          />
        </TermsWebView>
        <PressableWrapper>
          <ReviewNextPressable onPress={approveHandler}>동의</ReviewNextPressable>
        </PressableWrapper>
      </ActivityIndicator>
    </>
  );
};

export default PrivacyTermsOrganism;
