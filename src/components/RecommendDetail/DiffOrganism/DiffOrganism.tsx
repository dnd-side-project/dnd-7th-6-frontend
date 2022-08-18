import React from 'react';

import {Container, IconWrapper, Title, TitleContainer} from './DiffOrganism.styles';

import RecommendPreviewFourCard from 'src/components/Recommend/PreviewSixCard';
import {PressableRightArrowIcon} from 'src/components/utils/Pressables/PressableIcons';
import {SubHeadline2} from 'src/components/utils/Text';
import useGetPost from 'src/querys/useGetPost';
import {TestData} from 'src/TestData';

interface Props {
  id: number;
}

const RecommendDetailDiffOrganism = ({id}: Props) => {
  const {data} = useGetPost(id);

  return (
    <Container>
      <TitleContainer>
        <SubHeadline2>
          {!!data && (
            <>
              <Title>@{data.user.name}님의 다른 사진 </Title>
            </>
          )}
        </SubHeadline2>
        <IconWrapper>
          <PressableRightArrowIcon />
        </IconWrapper>
      </TitleContainer>
      <RecommendPreviewFourCard data={TestData} />
    </Container>
  );
};

export default RecommendDetailDiffOrganism;
