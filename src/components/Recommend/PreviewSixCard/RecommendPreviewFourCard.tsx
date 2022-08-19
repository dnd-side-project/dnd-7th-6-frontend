import React, {useMemo} from 'react';
import {useQueryClient} from 'react-query';
import {useSelector} from 'react-redux';

import RecommendFeedCard from '../FeedCard';
import {PreviewFourCardView} from './RecommendPreviewFourCard.styles';

import useMutatePostLike from 'src/querys/useMutatePostLike';
import {RootState} from 'src/redux/store';
import {Post} from 'src/types';

interface Props {
  data: Array<Post>;
  onPress?: onPressFeedCardHandler;
}

type onPressFeedCardHandler = (id: number) => () => void;

const RecommendPreviewFourCard = ({data, onPress}: Props) => {
  const queryClient = useQueryClient();
  const {mutate} = useMutatePostLike();
  const {userInfo} = useSelector((state: RootState) => state.userReducer);
  const fourPosts = useMemo(() => data.flat().slice(0, 6), [data]);

  return (
    <PreviewFourCardView>
      {fourPosts.map(
        ({id, postImageSet, like, user}) =>
          !!id && (
            <RecommendFeedCard
              key={id}
              imgUrl={postImageSet[0].imageUrl}
              isLike={like}
              onLike={() => {
                mutate(id, {
                  onSuccess: () => {
                    queryClient.invalidateQueries(['post']);
                    queryClient.invalidateQueries(['userLike']);
                  },
                });
              }}
              isMine={user.id === userInfo.id}
              {...(onPress ? {onPress: onPress(id)} : {})}
            />
          ),
      )}
    </PreviewFourCardView>
  );
};

export default RecommendPreviewFourCard;
