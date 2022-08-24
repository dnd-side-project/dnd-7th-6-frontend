import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useDispatch} from 'react-redux';

import {Container, ReturnButton, ReturnButtonTitle} from './ExitNavigationOrganism.styles';

import PressableSubmit from 'src/components/utils/Pressables/PressableSubmit';
import {clearPostWrite} from 'src/redux/actions/PostWriteAction';

const ExitNavigationOrganism = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePressReturnButton = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Recommend' as never}],
    });
    dispatch(clearPostWrite());
  };
  const handlePressRecord = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'RouteRecordScreen' as never}],
    });
    dispatch(clearPostWrite());
  };

  return (
    <Container>
      <PressableSubmit onPress={handlePressRecord}>내가 쓴 사진 기록 보기</PressableSubmit>
      <ReturnButton onPress={handlePressReturnButton}>
        <ReturnButtonTitle>추천으로 돌아가기</ReturnButtonTitle>
      </ReturnButton>
    </Container>
  );
};

export default ExitNavigationOrganism;
