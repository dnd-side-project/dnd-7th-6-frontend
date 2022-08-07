import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ChipWrapper} from '../NestedFilterOrganism/NestedFilterOrganism.styles';
import {Container} from './BrandFilter.styles';

import FilterChip from 'src/components/Chip/FilterChip';
import {changeFilteredBrand} from 'src/redux/actions/PostAction';
import {RootState} from 'src/redux/store';

const BrandFilter = () => {
  const filteredItems = useSelector((state: RootState) => state.postReducer.filteredBrand);
  const dispatch = useDispatch();
  const brands = [
    {id: 1, title: '하루필름', count: 999},
    {id: 2, title: '인생네컷', count: 999},
    {id: 3, title: '셀픽스', count: 999},
    {id: 4, title: '포토이즘', count: 999},
    {id: 5, title: '포토그레이', count: 999},
    {id: 6, title: '비룸', count: 999},
    {id: 7, title: '포토시그니처', count: 999},
  ];

  const handlePressChip = (id: number) => () => {
    dispatch(changeFilteredBrand(id));
  };

  return (
    <Container>
      {brands.map(({id, title, count}) => (
        <ChipWrapper key={id}>
          <FilterChip
            title={title}
            count={count}
            selected={filteredItems[id]}
            onPress={handlePressChip(id)}
          />
        </ChipWrapper>
      ))}
    </Container>
  );
};

export default BrandFilter;
