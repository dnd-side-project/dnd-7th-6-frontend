import React from 'react';
import {FlatList} from 'react-native';
import {useQueryClient} from 'react-query';

import {Container, style} from './PhotoOrganism.styles';

import FeedCard from 'src/components/Recommend/FeedCard';
import useMutatePostLike from 'src/querys/useMutatePostLike';
import useMutateReviewImageLike from 'src/querys/useMutateReviewImageLike';
import {UserLikeImage} from 'src/types';

interface Props {
  photoList: UserLikeImage[];
}

const PhotoOrganism = ({photoList}: Props) => {
  const queryClient = useQueryClient();
  const {mutate: likePost} = useMutatePostLike();
  const {mutate: likeReview} = useMutateReviewImageLike();

  const handleLike = (type: string, id: number) => () => {
    if (type === 'POST') {
      likePost(id, {
        onSuccess: () => {
          queryClient.invalidateQueries(['post']);
          queryClient.invalidateQueries(['userLike']);
        },
      });
    }
    if (type === 'REVIEW') {
      likeReview(id);
    }
  };

  return (
    <Container>
      <FlatList
        data={photoList}
        numColumns={2}
        style={style.flatList}
        renderItem={({index, item}) => (
          <FeedCard
            key={index}
            imgUrl={item.imageUrl}
            onLike={handleLike(item.type, item.id)}
            isLike={item.like}
          />
        )}
      />
    </Container>
  );
};

export default PhotoOrganism;
