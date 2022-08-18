import React from 'react';

import Chip from '../../Chip';
import UserReviewView from '../../utils/UserReviewView';
import {ChipContainer, ChipWrapper, Container} from './ContentsOrganism.styles';

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
        {data?.postTagSet.map(({tag}) => (
          <ChipContainer key={tag.id}>
            <Chip mode="bright" key={tag.id}>
              {tag.title}
            </Chip>
          </ChipContainer>
        ))}
      </ChipWrapper>
    </Container>
  );
};

export default ContentsOrganism;
