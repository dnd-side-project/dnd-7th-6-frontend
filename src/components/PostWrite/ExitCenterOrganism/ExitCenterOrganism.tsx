import React from 'react';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';

import {Container, Headline, Style} from './ExitCenterOrganism.styles';

import {RootState} from 'src/redux/store';

const ExitCenterOrganism = () => {
  const {isPostModifyMode} = useSelector((state: RootState) => state.postWriteReducer);

  return (
    <Container>
      <FastImage source={require('src/assets/images/end/end_post.png')} style={Style.fastImage} />
      <Headline>{isPostModifyMode ? '수정 완료 !' : '작성 완료 !'}</Headline>
    </Container>
  );
};

export default ExitCenterOrganism;
