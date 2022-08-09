import React from 'react';

import {Container, Headline, SubHeadline} from './ListEmptyComponent.styles';

const ListEmptyComponent = () => {
  return (
    <Container>
      <Headline>필터 검색 결과가 없어요</Headline>
      <SubHeadline>해당 필터에 대한 검색 결과가 없어요.</SubHeadline>
      <SubHeadline>필터를 해제하거나 다른 필터를 선택해보세요.</SubHeadline>
    </Container>
  );
};

export default ListEmptyComponent;
