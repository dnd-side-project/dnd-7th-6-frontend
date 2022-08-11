import React from 'react';

import ContentSection from '../ContentSection';
import {Button, ButtonTitle, Container} from './SelectSharedScopeOrganism.styles';

const SelectSharedScopeOrganism = () => {
  return (
    <ContentSection title="공유범위">
      <Container>
        <Button selected>
          <ButtonTitle selected>전체공개</ButtonTitle>
        </Button>
        <Button>
          <ButtonTitle>나만보기</ButtonTitle>
        </Button>
      </Container>
    </ContentSection>
  );
};

export default SelectSharedScopeOrganism;
