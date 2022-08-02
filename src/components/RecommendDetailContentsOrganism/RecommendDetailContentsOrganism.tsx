import React from 'react';

import Chip from '../Chip';
import UserReviewView from '../utils/UserReviewView';
import {ChipContainer, ChipWrapper, Container} from './RecommendDetailContentsOrganism.styles';

import useGetPost from 'src/querys/useGetPost';

interface Props {
  id: number;
}

const RecommendDetailContentsOrganism = ({id}: Props) => {
  const {data} = useGetPost(id);

  return (
    <Container>
      <UserReviewView
        writer={data?.user.email || ''}
        date={new Date(data?.createdAt || '')}
        contents={data?.content || ''}
        hasIcon={true}
      />
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

export default RecommendDetailContentsOrganism;
