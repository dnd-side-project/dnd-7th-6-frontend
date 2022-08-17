import React from 'react';
import {Dimensions, FlatList} from 'react-native';

import {Container} from './PhotoOrganism.styles';

import FeedCard from 'src/components/Recommend/FeedCard';
import useMutatePostLike from 'src/querys/useMutatePostLike';
import useMutateReviewImageLike from 'src/querys/useMutateReviewImageLike';
import {heightPercentage} from 'src/styles/ScreenResponse';
import {UserLikeImage} from 'src/types';

interface Props {
  photoList: UserLikeImage[];
}

const PhotoOrganism = ({photoList}: Props) => {
  const {mutate: likePost} = useMutatePostLike();
  const {mutate: likeReview} = useMutateReviewImageLike();

  const handleLike = (type: string, id: number) => () => {
    if (type === 'POST') {
      likePost(id);
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
        style={{height: Dimensions.get('window').height - heightPercentage(215)}}
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
