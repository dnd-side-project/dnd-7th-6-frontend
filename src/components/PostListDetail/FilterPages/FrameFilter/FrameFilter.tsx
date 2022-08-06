import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Container} from '../BrandFilter/BrandFilter.styles';
import {ChipWrapper} from '../NestedFilterOrganism/NestedFilterOrganism.styles';

import FilterChip from 'src/components/Chip/FilterChip';
import {changeFilteredFrame} from 'src/redux/actions/PostAction';
import {RootState} from 'src/redux/store';

const FrameFilter = () => {
  const filteredItems = useSelector((state: RootState) => state.postReducer.filteredFrame);
  const dispatch = useDispatch();
  const frames = [
    {id: 1, title: '깔끔한', count: 999},
    {id: 2, title: '캐릭터', count: 999},
    {id: 3, title: '코믹', count: 999},
    {id: 4, title: '아이돌', count: 999},
    {id: 5, title: '한정판', count: 999},
    {id: 6, title: '커스텀', count: 999},
  ];

  const handlePressChip = (id: number) => () => {
    dispatch(changeFilteredFrame(id));
  };

  return (
    <Container>
      {frames.map(({id, title, count}) => (
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

export default FrameFilter;
