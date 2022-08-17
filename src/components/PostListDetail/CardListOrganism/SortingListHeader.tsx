import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ListHeader, SortButtonWrapper, SortingButton} from './CardListOrganism.styles';

import {POST_LIST_ORDER} from 'src/constants/filters';
import {changeOrder} from 'src/redux/actions/PostAction';
import {RootState} from 'src/redux/store';

const SortingListHeader = () => {
  const dispatch = useDispatch();
  const {sort} = useSelector((state: RootState) => state.postReducer);
  const labels = {[POST_LIST_ORDER.POPULAR]: '인기순', [POST_LIST_ORDER.LATEST]: '최신순'};

  const handleSelectSorting = (target: string) => () => {
    dispatch(changeOrder(target));
  };

  return (
    <ListHeader>
      <SortButtonWrapper>
        <SortingButton
          onPress={handleSelectSorting(POST_LIST_ORDER.POPULAR)}
          selected={sort === POST_LIST_ORDER.POPULAR}>
          {labels[POST_LIST_ORDER.POPULAR]}
        </SortingButton>
      </SortButtonWrapper>
      <SortButtonWrapper>
        <SortingButton
          onPress={handleSelectSorting(POST_LIST_ORDER.LATEST)}
          selected={sort === POST_LIST_ORDER.LATEST}>
          {labels[POST_LIST_ORDER.LATEST]}
        </SortingButton>
      </SortButtonWrapper>
    </ListHeader>
  );
};

export default SortingListHeader;
