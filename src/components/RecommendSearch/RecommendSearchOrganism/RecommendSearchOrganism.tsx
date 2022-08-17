import {useNavigation} from '@react-navigation/native';
import React from 'react';

import RecommendSearchInput from '../RecommendSearchHeader';
import ReviewSearchList from '../ReviewSearchList';
import {Container, HeaderContainer} from './RecommendSearchOrganism.styles';

import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';

const RecommendSearchOrganism = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <HeaderContainer>
        <LeftBackHeader onPressBack={() => navigation.navigate('Recommend' as never)} />
        <RecommendSearchInput />
      </HeaderContainer>
      <ReviewSearchList />
    </Container>
  );
};

export default RecommendSearchOrganism;
