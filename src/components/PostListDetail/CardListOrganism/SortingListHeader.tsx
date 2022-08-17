import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ListHeader, SortButtonWrapper, SortingButton} from './CardListOrganism.styles';

import {SORT} from 'src/constants/filters';
import {changeSorting} from 'src/redux/actions/PostAction';
import {RootState} from 'src/redux/store';

const SortingListHeader = () => {
  const dispatch = useDispatch();
  const {sort} = useSelector((state: RootState) => state.postReducer);
  const labels = ['인기순', '최신순'];

  const handleSelectSorting = (target: number) => () => {
    dispatch(changeSorting(target));
  };

  return (
    <ListHeader>
      <SortButtonWrapper>
        <SortingButton onPress={handleSelectSorting(SORT.POPULAR)} selected={sort === SORT.POPULAR}>
          {labels[SORT.POPULAR]}
        </SortingButton>
      </SortButtonWrapper>
      <SortButtonWrapper>
        <SortingButton onPress={handleSelectSorting(SORT.LATEST)} selected={sort === SORT.LATEST}>
          {labels[SORT.LATEST]}
        </SortingButton>
      </SortButtonWrapper>
    </ListHeader>
  );
};

export default SortingListHeader;
