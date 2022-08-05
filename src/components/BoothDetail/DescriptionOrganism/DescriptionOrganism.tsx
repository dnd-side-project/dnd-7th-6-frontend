import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import {
  ButtonWrapper,
  Container,
  Contents,
  IconContainer,
  IconWrapper,
  Title,
} from './DescriptionOrganism.styles';

import BoothDetailData from 'src/BoothDetailData';
import PressableAddition from 'src/components/PressableAddition';
import {
  PressableLikeIcon,
  PressableUploadIcon,
} from 'src/components/utils/Pressables/PressableIcons';

const DescriptionOrganism = () => {
  const [data] = useState(BoothDetailData);
  const navigation = useNavigation();
  return (
    <Container>
      <IconContainer>
        <IconWrapper>
          <PressableUploadIcon />
        </IconWrapper>
        <IconWrapper>
          <PressableLikeIcon />
        </IconWrapper>
      </IconContainer>
      <Title>{data.title}</Title>
      <Contents>{data.address}</Contents>
      <Contents>
        매일 {data.activeTime[0]} ~ {data.activeTime[1]}
      </Contents>
      <ButtonWrapper>
        <PressableAddition
          onPress={() => navigation.navigate('BoothStoreReview' as never, {} as never)}>
          부스 정보 알려주기
        </PressableAddition>
      </ButtonWrapper>
    </Container>
  );
};

export default DescriptionOrganism;
