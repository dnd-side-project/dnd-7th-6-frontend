import React from 'react';
import {useSelector} from 'react-redux';

import {Container} from './SubmitOrganism.styles';

import PressableSubmit from 'src/components/utils/Pressables/PressableSubmit';
import {RootState} from 'src/redux/store';

const SubmitOrganism = () => {
  const {image, contents} = useSelector((state: RootState) => state.postWriteReducer);

  const isDisabled = !image.uri || !contents;

  return (
    <Container>
      <PressableSubmit disabled={isDisabled}>완료</PressableSubmit>
    </Container>
  );
};

export default SubmitOrganism;
