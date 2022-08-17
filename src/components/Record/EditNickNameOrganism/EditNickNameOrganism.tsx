import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';

import EditNickNameHeader from '../EditNickNameHeader';
import {
  DescriptionText,
  DescriptionTextContainer,
  MessegeText,
  NickNameTextInput,
  TextInputWrapper,
} from './EditNickNameOrganism.styles';

import useDebounce from 'src/hooks/useDebounce';
import useGetUserNameValid from 'src/querys/useGetUserNameValid';
import {RootState} from 'src/redux/store';

const EditNickNameOrganism = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const userInfo = useSelector((state: RootState) => state.userReducer.userInfo);
  const [value, setValue] = useState(userInfo?.name);
  const [message, setMessage] = useState(' ');
  const {data, refetch} = useGetUserNameValid(value);
  const debounce = useDebounce(refetch, 300);
  const navigation = useNavigation();
  const [isServerValid, setIsServerValid] = useState(false);

  useEffect(() => {
    const nickNameValid = async () => {
      const regexp = /^[0-9a-zA-Z._]*$/;
      if (value.length > 20) {
        setMessage('닉네임은 20자 이하로 입력해 주세요.');
        setIsSuccess(false);
      } else if (value.length < 2) {
        setMessage('닉네임은 2자 이상으로 입력해 주세요.');
        setIsSuccess(false);
      } else if (!regexp.test(value)) {
        setMessage('닉네임은 띄어쓰기 없이 영문, 숫자, 일부 특수문자만 가능해요.');
        setIsSuccess(false);
      } else if (value === userInfo.name) {
        setIsSuccess(false);
        setMessage(' ');
      } else {
        setIsServerValid(false);
        debounce();
        setMessage(' ');
        setIsSuccess(true);
      }
    };
    nickNameValid();
  }, [value]);

  useEffect(() => {
    if (isSuccess) {
      if (data === 500) {
        if (value !== userInfo.name) {
          setMessage('동일한 닉네임이 있어요.');
          setIsSuccess(false);
        }
      } else {
        setIsServerValid(true);
        setMessage('사용 가능한 닉네임이에요.');
      }
    }
  }, [data]);
  return (
    <>
      <SafeAreaView>
        <EditNickNameHeader
          onPressBack={() => navigation.goBack()}
          isSuccess={isSuccess && isServerValid}
          name={value}>
          닉네임 수정
        </EditNickNameHeader>
      </SafeAreaView>
      <TextInputWrapper>
        <NickNameTextInput
          autoFocus
          value={value}
          onChangeText={text => {
            setValue(text);
          }}
        />
      </TextInputWrapper>
      <MessegeText isSuccess={isSuccess && isServerValid}>{message}</MessegeText>
      <DescriptionTextContainer>
        <DescriptionText>- 길이는 최대 20자 이내로 해주세요.</DescriptionText>
        <DescriptionText>- 영문, 숫자, 밑줄 및 마침표만 사용 가능합니다.</DescriptionText>
      </DescriptionTextContainer>
    </>
  );
};

export default EditNickNameOrganism;
