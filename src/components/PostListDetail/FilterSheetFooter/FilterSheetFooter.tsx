import React from 'react';

import {Container, RefreshWrapper} from './FilterSheetFooter.styles';

import {PressableRefreshIcon} from 'src/components/utils/Pressables/PressableIcons';
import PressableSubmit from 'src/components/utils/Pressables/PressableSubmit';
import {widthPercentage} from 'src/styles/ScreenResponse';

const FilterSheetFooter = () => {
  const data = 9999;

  return (
    <Container>
      <RefreshWrapper>
        <PressableRefreshIcon />
      </RefreshWrapper>
      <PressableSubmit style={{width: widthPercentage(286)}}>{data}개 결과보기</PressableSubmit>
    </Container>
  );
};

export default FilterSheetFooter;
