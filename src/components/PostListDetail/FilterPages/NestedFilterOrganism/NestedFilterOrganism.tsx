import React, {PropsWithChildren} from 'react';

import {ChipContainer, Container, TypeOfFilter} from './NestedFilterOrganism.styles';

interface Props {
  type: string;
}

const NestedFilterOrganism = ({type, children}: PropsWithChildren<Props>) => {
  return (
    <Container>
      <TypeOfFilter>{type}</TypeOfFilter>
      <ChipContainer>{children}</ChipContainer>
    </Container>
  );
};

export default NestedFilterOrganism;
