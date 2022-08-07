import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import NestedFilterOrganism from '../NestedFilterOrganism';
import {ChipWrapper} from '../NestedFilterOrganism/NestedFilterOrganism.styles';
import {Container} from './HeadcountFilter.styles';

import FilterChip from 'src/components/Chip/FilterChip';
import {
  changeFilteredHeadcountNumber,
  changeFilteredHeadcountRelation,
} from 'src/redux/actions/PostAction';
import {RootState} from 'src/redux/store';

const HeadcountFilter = () => {
  const {number, relation} = useSelector((state: RootState) => state.postReducer.filteredHeadcount);
  const dispatch = useDispatch();
  const numOfPeople = [
    {id: 1, title: '혼자', count: 999},
    {id: 2, title: '2명', count: 999},
    {id: 3, title: '3명', count: 999},
    {id: 4, title: '4명', count: 999},
    {id: 5, title: '5명 이상', count: 999},
  ];
  const relationData = [
    {id: 1, title: '커플', count: 999},
    {id: 2, title: '친구', count: 999},
    {id: 3, title: '가족', count: 999},
  ];

  const handlePressNumberChip = (id: number) => () => {
    dispatch(changeFilteredHeadcountNumber(id));
  };
  const handlePressRelationChip = (id: number) => () => {
    dispatch(changeFilteredHeadcountRelation(id));
  };

  return (
    <Container>
      <NestedFilterOrganism type="인원 수">
        {numOfPeople.map(({id, title, count}) => (
          <ChipWrapper key={id}>
            <FilterChip
              title={title}
              count={count}
              selected={number[id]}
              onPress={handlePressNumberChip(id)}
            />
          </ChipWrapper>
        ))}
      </NestedFilterOrganism>
      <NestedFilterOrganism type="관계">
        {relationData.map(({id, title, count}) => (
          <ChipWrapper key={id}>
            <FilterChip
              title={title}
              count={count}
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
