import React from 'react';

import {Container} from './SubmitOrganism.styles';

import PressableSubmit from 'src/components/utils/Pressables/PressableSubmit';

const SubmitOrganism = () => {
  return (
    <Container>
      <PressableSubmit>완료</PressableSubmit>
    </Container>
  );
};

export default SubmitOrganism;
