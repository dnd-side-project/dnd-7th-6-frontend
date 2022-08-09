import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ChipWrapper} from '../NestedFilterOrganism/NestedFilterOrganism.styles';
import {Container} from './BrandFilter.styles';

import FilterChip from 'src/components/Chip/FilterChip';
import {FILTER} from 'src/constants/filters';
import useGetTagForm from 'src/querys/useGetTagForm';
import {changeFilteredBrand} from 'src/redux/actions/PostAction';
import {RootState} from 'src/redux/store';
import {Tag} from 'src/types';

const BrandFilter = () => {
  const filteredItems = useSelector((state: RootState) => state.postReducer.filteredBrand);
  const dispatch = useDispatch();
  const {data} = useGetTagForm(FILTER.BRAND);
  // @ts-ignore
  const tags: Tag[][] = (data || []) as Promise<Tag[][]>;

  const handlePressChip = (id: number) => () => {
    dispatch(changeFilteredBrand(id));
  };

  return (
    <Container>
      {(tags[0] || []).map(({id, title, postCount}) => (
        <ChipWrapper key={id}>
          <FilterChip
            title={title}
            count={postCount}
            selected={filteredItems[id]}
            onPress={handlePressChip(id)}
          />
        </ChipWrapper>
      ))}
    </Container>
  );
};

export default BrandFilter;
