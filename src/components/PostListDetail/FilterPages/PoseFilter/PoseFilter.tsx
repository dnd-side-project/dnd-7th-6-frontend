import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Container} from '../HeadcountFilter/HeadcountFilter.styles';
import NestedFilterOrganism from '../NestedFilterOrganism';
import {ChipWrapper} from '../NestedFilterOrganism/NestedFilterOrganism.styles';

import FilterChip from 'src/components/Chip/FilterChip';
import {FILTER} from 'src/constants/filters';
import useGetTagForm from 'src/querys/useGetTagForm';
import {changeFilteredPoseEmotion, changeFilteredPoseSituation} from 'src/redux/actions/PostAction';
import {RootState} from 'src/redux/store';
import {Tag} from 'src/types';

const PoseFilter = () => {
  const {emotion, situation} = useSelector((state: RootState) => state.postReducer.filteredPose);
  const dispatch = useDispatch();
  const {data} = useGetTagForm(FILTER.POSE);
  // @ts-ignore
  const tags: Tag[][] = data || [];

  const handlePressEmotionChip = (id: number) => () => {
    dispatch(changeFilteredPoseEmotion(id));
  };
  const handlePressSituationChip = (id: number) => () => {
    dispatch(changeFilteredPoseSituation(id));
  };

  return (
    <Container>
      <NestedFilterOrganism type="감정">
        {(tags[0] || []).map(({id, title, postCount}) => (
          <ChipWrapper key={id}>
            <FilterChip
              title={title}
              count={postCount}
              selected={emotion[id]}
              onPress={handlePressEmotionChip(id)}
            />
          </ChipWrapper>
        ))}
      </NestedFilterOrganism>
      <NestedFilterOrganism type="상황">
        {(tags[1] || []).map(({id, title, postCount}) => (
          <ChipWrapper key={id}>
            <FilterChip
              title={title}
              count={postCount}
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
