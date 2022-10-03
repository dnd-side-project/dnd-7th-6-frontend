import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ReviewNextPressable from '../../BoothReview/ReviewNextPressable';
import {
  PressableCheckButtonIcon24,
  PressableCheckButtonIcon36,
  PressableOnCheckButtonIcon24,
  PressableOnCheckButtonIcon36,
} from '../../utils/Pressables/PressableIcons';
import {
  Container,
  EntirelyTermsButton,
  EntirelyTermsView,
  EntirelyText,
  PressableWrapper,
  Subtitle,
  TermsContainer,
  TermsTextButton,
  Title,
  TitleBold,
} from './TermsOrganism.styles';

import requestcameraPermission from 'src/hooks/requestcameraPermission';
import requestLocationPermission from 'src/hooks/requestLocationPermission';
import {
  changeLocationTerms,
  changePrivacyTerms,
  changeServiceTerms,
} from 'src/redux/actions/TermsAction';
import {RootState} from 'src/redux/store';

const TermsOrganism = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {serviceTerms, privacyTerms, locationTerms} = useSelector(
    (state: RootState) => state.termsReducer,
  );

  const nextHandler = () => {
    requestcameraPermission().then(() =>
      requestLocationPermission().then(() => navigation.navigate('AppInner' as never)),
    );
  };
  const pressServiceTerms = () => {
    dispatch(changeServiceTerms(!serviceTerms));
  };
  const pressPrivacyTerms = () => {
    dispatch(changePrivacyTerms(!privacyTerms));
  };
  const pressLocationTerms = () => {
    dispatch(changeLocationTerms(!locationTerms));
  };
  const pressEntireTerms = () => {
    dispatch(changeLocationTerms(true));
    dispatch(changePrivacyTerms(true));
    dispatch(changeServiceTerms(true));
  };
  const pressServiceDefinition = () => {
    navigation.navigate('ServiceTermsScreen' as never);
  };
  const pressPrivacyDefinition = () => {
    navigation.navigate('PrivacyTermsScreen' as never);
  };
  const pressLocationDefinition = () => {
    navigation.navigate('LocationTermsScreen' as never);
  };
  return (
    <Container>
      <Title>
        {'포톡스가 처음이시군요!\n'}
        <TitleBold>{'약관 내용에 동의'}</TitleBold>
        {'가 필요해요'}
      </Title>
      <Subtitle>필수 약관 동의</Subtitle>
      <TermsContainer>
        <TermsTextButton onPress={pressServiceDefinition}>(필수) 포톡스 이용약관</TermsTextButton>
        {serviceTerms ? (
          <PressableOnCheckButtonIcon24 onPress={pressServiceTerms} />
        ) : (
          <PressableCheckButtonIcon24 onPress={pressServiceTerms} />
        )}
      </TermsContainer>
      <TermsContainer>
        <TermsTextButton onPress={pressPrivacyDefinition}>
          (필수) 개인정보 수집/이용 동의
        </TermsTextButton>
        {privacyTerms ? (
          <PressableOnCheckButtonIcon24 onPress={pressPrivacyTerms} />
        ) : (
          <PressableCheckButtonIcon24 onPress={pressPrivacyTerms} />
        )}
      </TermsContainer>
      <TermsContainer>
        <TermsTextButton onPress={pressLocationDefinition}>
          (필수) 위치 기반 서비스 이용약관 동의
        </TermsTextButton>
        {locationTerms ? (
          <PressableOnCheckButtonIcon24 onPress={pressLocationTerms} />
        ) : (
          <PressableCheckButtonIcon24 onPress={pressLocationTerms} />
        )}
      </TermsContainer>
      <EntirelyTermsView>
        <EntirelyText>모두 확인, 동의합니다.</EntirelyText>
        <EntirelyTermsButton>
          {locationTerms && privacyTerms && serviceTerms ? (
            <PressableOnCheckButtonIcon36 onPress={pressEntireTerms} />
          ) : (
            <PressableCheckButtonIcon36 onPress={pressEntireTerms} />
          )}
        </EntirelyTermsButton>
      </EntirelyTermsView>
      <PressableWrapper>
        <ReviewNextPressable
          onPress={nextHandler}
          disable={!(locationTerms && privacyTerms && serviceTerms)}>
          완료
        </ReviewNextPressable>
      </PressableWrapper>
    </Container>
  );
};

export default TermsOrganism;
