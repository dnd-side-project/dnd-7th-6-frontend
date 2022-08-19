import React from 'react';
import {FlatList} from 'react-native';
import {useQueryClient} from 'react-query';

import {style} from './BoothImageOrganism.styles';

import FeedCard from 'src/components/Recommend/FeedCard';
import useGetReviewImages from 'src/querys/useGetReviewImages';
import useMutateReviewImageLike from 'src/querys/useMutateReviewImageLike';

interface Props {
  reviewId: number;
}

const BoothImageOrganism = ({reviewId}: Props) => {
  const queryClient = useQueryClient();
  const {data, fetchNextPage} = useGetReviewImages(reviewId);
  const {mutate: likeReviewImage} = useMutateReviewImageLike();

  const handleLikeReviewImage = (imageId: number) => () => {
    likeReviewImage(imageId, {
      onSuccess: () => queryClient.invalidateQueries(['review-images']),
    });
  };

  if (!data) {
    return <></>;
  }

  return (
    <FlatList
      numColumns={2}
      style={style.flatList}
      data={data.pages.flatMap(image => image.content)}
      onEndReached={() => fetchNextPage()}
      renderItem={({item}) => (
        <FeedCard
          imgUrl={item.imageUrl}
          isLike={item.like}
          onLike={handleLikeReviewImage(item.id)}
        />
      )}
    />
  );
};

export default BoothImageOrganism;
