import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {FlatList} from 'react-native';
import {useQueryClient} from 'react-query';

import {style} from './BoothImageList.styles';

import FeedCard from 'src/components/Recommend/FeedCard';
import {ScrollUpWrapper} from 'src/components/ReviewImageDetail/ReviewListOrganism/ReviewListOrganism.styles';
import ScrollUpButton from 'src/components/utils/Button/ScrollUpButton';
import useGetReviewImages from 'src/querys/useGetReviewImages';
import useMutateReviewImageLike from 'src/querys/useMutateReviewImageLike';

interface Props {
  boothId: number;
  scrollTrigger: boolean;
}

const BoothImageList = ({boothId, scrollTrigger}: Props) => {
  const queryClient = useQueryClient();
  const navigation = useNavigation();
  const scrollRef = useRef<FlatList>(null);
  const {data, fetchNextPage} = useGetReviewImages(boothId);
  const {mutate: likeReviewImage} = useMutateReviewImageLike();

  const handleLikeReviewImage = (imageId: number) => () => {
    likeReviewImage(imageId, {
      onSuccess: () => queryClient.invalidateQueries(['review-images']),
    });
  };

  useEffect(() => {
    scrollRef.current?.scrollToOffset({offset: 0});
  }, [scrollTrigger]);

  if (!data) {
    return <></>;
  }

  return (
    <>
      <FlatList
        ref={scrollRef}
        numColumns={2}
        style={style.flatList}
        data={data.pages.flatMap(image => image.content)}
        onEndReached={() => fetchNextPage()}
        renderItem={({item}) => (
          <FeedCard
            imgUrl={item.imageUrl}
            isLike={item.like}
            onLike={handleLikeReviewImage(item.id)}
            onPress={() =>
              navigation.navigate(
                'ReviewImageDetail' as never,
                {boothId, targetImage: item} as never,
              )
            }
          />
        )}
      />
      <ScrollUpWrapper>
        <ScrollUpButton />
      </ScrollUpWrapper>
    </>
  );
};

export default BoothImageList;
