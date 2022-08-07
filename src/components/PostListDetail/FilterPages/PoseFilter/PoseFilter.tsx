import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Container} from '../HeadcountFilter/HeadcountFilter.styles';
import NestedFilterOrganism from '../NestedFilterOrganism';
import {ChipWrapper} from '../NestedFilterOrganism/NestedFilterOrganism.styles';

import FilterChip from 'src/components/Chip/FilterChip';
import {changeFilteredPoseEmotion, changeFilteredPoseSituation} from 'src/redux/actions/PostAction';
import {RootState} from 'src/redux/store';

const PoseFilter = () => {
  const {emotion, situation} = useSelector((state: RootState) => state.postReducer.filteredPose);
  const dispatch = useDispatch();
  const emotionData = [
    {id: 1, title: '코믹', count: 999},
    {id: 2, title: '예쁜/청순', count: 999},
    {id: 3, title: '힙한', count: 999},
    {id: 4, title: '연예인', count: 999},
    {id: 5, title: '졸업', count: 999},
  ];
  const situationData = [
    {id: 1, title: '졸업', count: 999},
    {id: 2, title: '생일', count: 999},
    {id: 3, title: '크리스마스', count: 999},
    {id: 4, title: '시험끝', count: 999},
    {id: 5, title: '프로필사진', count: 999},
    {id: 6, title: '명절', count: 999},
    {id: 7, title: '웃긴소품', count: 999},
    {id: 8, title: '공주소품', count: 999},
  ];

  const handlePressEmotionChip = (id: number) => () => {
    dispatch(changeFilteredPoseEmotion(id));
  };
  const handlePressSituationChip = (id: number) => () => {
    dispatch(changeFilteredPoseSituation(id));
  };

  return (
    <Container>
      <NestedFilterOrganism type="감정">
        {emotionData.map(({id, title, count}) => (
          <ChipWrapper key={id}>
            <FilterChip
              title={title}
              count={count}
              selected={emotion[id]}
              onPress={handlePressEmotionChip(id)}
            />
          </ChipWrapper>
        ))}
      </NestedFilterOrganism>
      <NestedFilterOrganism type="상황">
        {situationData.map(({id, title, count}) => (
          <ChipWrapper key={id}>
            <FilterChip
              title={title}
              count={count}
              selected={situation[id]}
              onPress={handlePressSituationChip(id)}
            />
          </ChipWrapper>
        ))}
      </NestedFilterOrganism>
    </Container>
  );
};

export default PoseFilter;
