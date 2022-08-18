import {useNavigation} from '@react-navigation/native';
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
  const navigation = useNavigation();
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

  const handleCard = (type: string, id: number) => () => {
    if (type === 'REVIEW') {
      navigation.navigate(
        'BoothScreen' as never,
        {
          screen: 'BoothDetail' as never,
        } as never,
      );
    }
    if (type === 'POST') {
      navigation.navigate(
        'RouteRecommendScreen' as never,
        {
          screen: 'RecommendDetail' as never,
          params: {id: id, distance: 0} as never,
        } as never,
      );
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
            onPress={handleCard(item.type, item.id)}
            onLike={handleLike(item.type, item.id)}
            isLike={item.like}
          />
        )}
      />
    </Container>
  );
};

export default PhotoOrganism;
