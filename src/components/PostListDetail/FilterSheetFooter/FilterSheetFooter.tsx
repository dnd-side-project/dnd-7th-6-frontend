import React from 'react';
import {useDispatch} from 'react-redux';

import {Container, RefreshWrapper} from './FilterSheetFooter.styles';

import {PressableRefreshIcon} from 'src/components/utils/Pressables/PressableIcons';
import PressableSubmit from 'src/components/utils/Pressables/PressableSubmit';
import useFilteredItem from 'src/hooks/useFilteredItem';
import useGetPostsByTag from 'src/querys/useGetPostsByTag';
import {clearFilter} from 'src/redux/actions/PostAction';
import {widthPercentage} from 'src/styles/ScreenResponse';

const FilterSheetFooter = () => {
  const dispatch = useDispatch();
  const {tagIdSet} = useFilteredItem();
  const {data} = useGetPostsByTag(tagIdSet);

  const handlePressRefresh = () => dispatch(clearFilter());

  return (
    <Container>
      <RefreshWrapper onPress={handlePressRefresh}>
        <PressableRefreshIcon onPress={handlePressRefresh} />
      </RefreshWrapper>
      <PressableSubmit style={{width: widthPercentage(286)}}>
        {data === undefined ? '' : `${data.content.length}개 결과보기`}
      </PressableSubmit>
    </Container>
  );
};

export default FilterSheetFooter;
