import React from 'react';

import {Container, ReturnButton, ReturnButtonTitle} from './ExitNavigationOrganism.styles';

import PressableSubmit from 'src/components/utils/Pressables/PressableSubmit';

const ExitNavigationOrganism = () => {
  return (
    <Container>
      <PressableSubmit>내가 쓴 사진 리뷰 보기</PressableSubmit>
      <ReturnButton>
        <ReturnButtonTitle>부스 상세로 돌아가기</ReturnButtonTitle>
      </ReturnButton>
    </Container>
  );
};

export default ExitNavigationOrganism;
