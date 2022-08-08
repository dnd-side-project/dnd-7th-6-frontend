import React from 'react';
import {Text} from 'react-native';

import {Label} from '../SelectTagOrganism/SelectTagOrganism.styles';
import {Container, FakeInputText, FakePlaceholder, SubLabel} from './InputCustomTagOrganism.styles';

const InputCustomTagOrganism = () => {
  return (
    <Container>
      <Text>
        <Label>직접 태그를 남겨보세요. </Label>
        <SubLabel>(최대 4개)</SubLabel>
      </Text>
      <FakeInputText>
        <FakePlaceholder># 키워드를 입력해 주세요</FakePlaceholder>
      </FakeInputText>
    </Container>
  );
};

export default InputCustomTagOrganism;
