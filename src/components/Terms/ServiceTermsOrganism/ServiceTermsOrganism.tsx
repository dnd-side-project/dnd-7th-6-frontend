import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';
import {useDispatch} from 'react-redux';

import {PressableWrapper, TermsWebView} from './ServiceTermsOrganism.styles';

import ReviewNextPressable from 'src/components/BoothReview/ReviewNextPressable';
import ActivityIndicator from 'src/components/utils/ActivityIndicator';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import {changeServiceTerms} from 'src/redux/actions/TermsAction';

const ServiceTermsOrganism = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const approveHandler = () => {
    dispatch(changeServiceTerms(true));
    navigation.goBack();
  };
  return (
    <>
      <SafeAreaView>
        <LeftBackHeader
          onPressBack={() => {
            navigation.goBack();
          }}>
          (필수) 포톡스 이용약관
        </LeftBackHeader>
      </SafeAreaView>
      <ActivityIndicator loading={isLoading}>
        <TermsWebView>
          <WebView
            onLoadEnd={() => setIsLoading(false)}
            source={{uri: 'https://devung.notion.site/211d82c1e6a542628d0845e941f4fc75'}}
          />
        </TermsWebView>
        <PressableWrapper>
          <ReviewNextPressable onPress={approveHandler}>동의</ReviewNextPressable>
        </PressableWrapper>
      </ActivityIndicator>
    </>
  );
};

export default ServiceTermsOrganism;
