import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ContentSection from '../ContentSection';
import {Button, ButtonTitle, Container} from './SelectSharedScopeOrganism.styles';

import {changeSharedScope} from 'src/redux/actions/PostWriteAction';
import {RootState} from 'src/redux/store';

const SelectSharedScopeOrganism = () => {
  const dispatch = useDispatch();
  const {isPublic} = useSelector((state: RootState) => state.postWriteReducer);

  const handlePressButton = (sharedScope: boolean) => () => {
    dispatch(changeSharedScope(sharedScope));
  };

  return (
    <ContentSection title="공유범위">
      <Container>
        <Button selected={isPublic} onPress={handlePressButton(true)}>
          <ButtonTitle selected={isPublic}>전체공개</ButtonTitle>
        </Button>
        <Button selected={!isPublic} onPress={handlePressButton(false)}>
          <ButtonTitle selected={!isPublic}>나만보기</ButtonTitle>
        </Button>
      </Container>
    </ContentSection>
  );
};

export default SelectSharedScopeOrganism;
