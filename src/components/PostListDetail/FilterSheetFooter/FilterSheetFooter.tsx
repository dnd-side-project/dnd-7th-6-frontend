import React from 'react';
import {useDispatch} from 'react-redux';

import {Container, RefreshWrapper} from './FilterSheetFooter.styles';

import {PressableRefreshIcon} from 'src/components/utils/Pressables/PressableIcons';
import PressableSubmit from 'src/components/utils/Pressables/PressableSubmit';
import {clearFilter, closeFilterSheet} from 'src/redux/actions/PostAction';
import {widthPercentage} from 'src/styles/ScreenResponse';

const FilterSheetFooter = () => {
  const dispatch = useDispatch();

  const handlePressRefresh = () => {
    dispatch(clearFilter());
    dispatch(closeFilterSheet());
  };
  const handleSubmit = () => {
    dispatch(closeFilterSheet());
  };

  return (
    <Container>
      <RefreshWrapper onPress={handlePressRefresh}>
        <PressableRefreshIcon onPress={handlePressRefresh} />
      </RefreshWrapper>
      <PressableSubmit style={{width: widthPercentage(286)}} onPress={handleSubmit}>
        결과보기
      </PressableSubmit>
    </Container>
  );
};

export default FilterSheetFooter;
