import React, {useMemo} from 'react';
import {useQueryClient} from 'react-query';

import RecommendFeedCard from '../FeedCard';
import {PreviewFourCardView} from './RecommendPreviewFourCard.styles';

import useMutatePostLike from 'src/querys/useMutatePostLike';
import {Post} from 'src/types';

interface Props {
  data: Array<Post>;
  onPress?: onPressFeedCardHandler;
}

type onPressFeedCardHandler = (id: number) => () => void;

const RecommendPreviewFourCard = ({data, onPress}: Props) => {
  const queryClient = useQueryClient();
  const {mutate} = useMutatePostLike();
  const fourPosts = useMemo(() => data.slice(0, 6), [data]);

  return (
    <PreviewFourCardView>
      {fourPosts.flatMap(
        ({id, postImageSet, like}) =>
          !!id && (
            <RecommendFeedCard
              key={id}
              imgUrl={postImageSet[0].imageUrl}
              isLike={like}
              onLike={() => {
                mutate(id, {
                  onSuccess: () => {
                    queryClient.invalidateQueries(['post']);
                  },
                });
              }}
              {...(onPress ? {onPress: onPress(id)} : {})}
            />
          ),
      )}
    </PreviewFourCardView>
  );
};

export default RecommendPreviewFourCard;
