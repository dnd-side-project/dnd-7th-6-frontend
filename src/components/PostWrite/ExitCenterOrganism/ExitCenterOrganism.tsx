import React from 'react';
import FastImage from 'react-native-fast-image';

import {Container, Headline, Style} from './ExitCenterOrganism.styles';

const ExitCenterOrganism = () => {
  return (
    <Container>
      <FastImage source={require('src/assets/images/end/end_post.png')} style={Style.fastImage} />
      <Headline>공유 완료!</Headline>
    </Container>
  );
};

export default ExitCenterOrganism;
