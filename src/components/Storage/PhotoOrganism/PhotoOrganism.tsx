import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {useQueryClient} from 'react-query';

import {Container, FlatListWrapper, style} from './PhotoOrganism.styles';

import FeedCard from 'src/components/Recommend/FeedCard';
import useMutatePostLike from 'src/querys/useMutatePostLike';
import useMutateReviewImageLike from 'src/querys/useMutateReviewImageLike';
import {heightPercentage} from 'src/styles/ScreenResponse';
import {ReviewImage, UserLikeImage} from 'src/types';

interface Props {
  photoList?: UserLikeImage[];
  isLoading: boolean;
}

const PhotoOrganism = ({photoList, isLoading}: Props) => {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const {mutate: likePost} = useMutatePostLike();
  const {mutate: likeReview} = useMutateReviewImageLike();

  const reviewImageAdapter = (reviewImage: UserLikeImage): ReviewImage => {
    const {id, imageUrl, like} = reviewImage;
    return {id, imageUrl, imageOrder: 0, like};
  };
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
  const handleCard = (type: string, id: number, reviewImage: UserLikeImage) => () => {
    if (type === 'REVIEW') {
      navigation.navigate(
        'BoothScreen' as never,
        {
          screen: 'ReviewDetail' as never,
          targetImage: reviewImageAdapter(reviewImage),
        } as never,
      );
    }
    if (type === 'POST') {
      navigation.navigate(
        'RouteRecommendScreen' as never,
        {
          screen: 'RecommendDetail' as never,
          params: {postId: id, distance: 0} as never,
        } as never,
      );
    }
  };

  return (
    <Container>
      <FlatListWrapper>
        {isLoading ? (
          <ActivityIndicator size="large" style={{marginTop: heightPercentage(100)}} />
        ) : (
          <FlatList
            data={photoList}
            numColumns={2}
            style={style.flatList}
            renderItem={({index, item}) => (
              <FeedCard
                key={index}
                imgUrl={item.imageUrl}
                onPress={handleCard(item.type, item.id, item)}
                onLike={handleLike(item.type, item.id)}
                isLike={item.like}
              />
            )}
          />
        )}
      </FlatListWrapper>
    </Container>
  );
};

export default PhotoOrganism;
