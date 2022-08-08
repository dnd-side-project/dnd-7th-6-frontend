import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import NestedFilterOrganism from '../NestedFilterOrganism';
import {ChipWrapper} from '../NestedFilterOrganism/NestedFilterOrganism.styles';
import {Container} from './HeadcountFilter.styles';

import FilterChip from 'src/components/Chip/FilterChip';
import {FILTER} from 'src/constants/filters';
import useGetTagForm from 'src/querys/useGetTagForm';
import {
  changeFilteredHeadcountNumber,
  changeFilteredHeadcountRelation,
} from 'src/redux/actions/PostAction';
import {RootState} from 'src/redux/store';
import {Tag} from 'src/types';

const HeadcountFilter = () => {
  const {number, relation} = useSelector((state: RootState) => state.postReducer.filteredHeadcount);
  const dispatch = useDispatch();
  const {data} = useGetTagForm(FILTER.HEADCOUNT);
  // @ts-ignore
  const tags: Tag[][] = (data || []) as Promise<Tag[][]>;

  const handlePressNumberChip = (id: number) => () => {
    dispatch(changeFilteredHeadcountNumber(id));
  };
  const handlePressRelationChip = (id: number) => () => {
    dispatch(changeFilteredHeadcountRelation(id));
  };

  return (
    <Container>
      <NestedFilterOrganism type="인원 수">
        {(tags[0] || []).map(({id, title, postCount}) => (
          <ChipWrapper key={id}>
            <FilterChip
              title={title}
              count={postCount}
              selected={number[id]}
              onPress={handlePressNumberChip(id)}
            />
          </ChipWrapper>
        ))}
      </NestedFilterOrganism>
      <NestedFilterOrganism type="관계">
        {(tags[1] || []).map(({id, title, postCount}) => (
          <ChipWrapper key={id}>
            <FilterChip
              title={title}
              count={postCount}
              selected={relation[id]}
              onPress={handlePressRelationChip(id)}
            />
          </ChipWrapper>
        ))}
      </NestedFilterOrganism>
    </Container>
  );
};

export default HeadcountFilter;
