import React from 'react';

import UserReviewView from '../../utils/UserReviewView';
import {ChipContainer, ChipWrapper, Container} from './ContentsOrganism.styles';

import FilterChip from 'src/components/Chip/FilterChip';
import useGetPost from 'src/querys/useGetPost';

interface Props {
  id: number;
}

const ContentsOrganism = ({id}: Props) => {
  const {data} = useGetPost(id);

  return (
    <Container>
      {data && <UserReviewView post={data} />}
      <ChipWrapper>
        {data?.postTagSet
          .sort((a, b) => a.tag.id - b.tag.id)
          .map(({tag}) => (
            <ChipContainer key={tag.id}>
              <FilterChip title={tag.title} selected={false} />
            </ChipContainer>
          ))}
      </ChipWrapper>
    </Container>
  );
};

export default ContentsOrganism;
