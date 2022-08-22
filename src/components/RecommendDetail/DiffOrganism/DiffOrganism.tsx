import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';

import {Container, IconWrapper, Title, TitleContainer} from './DiffOrganism.styles';

import {ListWrapper} from 'src/components/Recommend/PoseOrganism/PoseOrganism.styles';
import RecommendPreviewFourCard from 'src/components/Recommend/PreviewSixCard';
import {PressableRightArrowIcon} from 'src/components/utils/Pressables/PressableIcons';
import {SubHeadline2} from 'src/components/utils/Text';
import useGetPost from 'src/querys/useGetPost';
import useGetPosts from 'src/querys/useGetPosts';
import {RecommendParamList} from 'src/screens/RecommendScreen';

interface Props {
  id: number;
  navigation: NativeStackNavigationProp<RecommendParamList, 'RecommendDetail', undefined>;
}

const RecommendDetailDiffOrganism = ({id, navigation}: Props) => {
  const {data: thisPost} = useGetPost(id);
  const {data: diffUserPost} = useGetPosts(
    {userId: thisPost?.user.id},
    {
      enabled: !!thisPost,
    },
  );

  const handlePressCard = (postId: number) => () => {
    navigation.push('RecommendDetail' as never, {postId} as never);
  };
  const navigateDiffUserPost = () => {
    if (!thisPost) {
      return;
    }
    navigation.push(
      'DiffUserPost' as never,
      {
        userId: thisPost.user.id,
        username: thisPost.user.name,
      } as never,
    );
  };

  return (
    <Container>
      <TitleContainer>
        <SubHeadline2>
          {!!thisPost && (
            <>
              <Title>@{thisPost.user.name}님의 다른 사진 </Title>
            </>
          )}
        </SubHeadline2>
        <IconWrapper>
          <PressableRightArrowIcon onPress={navigateDiffUserPost} />
        </IconWrapper>
      </TitleContainer>
      <ListWrapper>
        {!!diffUserPost && (
          <RecommendPreviewFourCard
            data={diffUserPost.pages.flatMap(({content}) => content)}
            onPress={handlePressCard}
          />
        )}
      </ListWrapper>
    </Container>
  );
};

export default RecommendDetailDiffOrganism;
