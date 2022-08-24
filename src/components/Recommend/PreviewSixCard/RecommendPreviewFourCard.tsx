import React, {useMemo} from 'react';
import {ActivityIndicator} from 'react-native';
import {useQueryClient} from 'react-query';
import {useSelector} from 'react-redux';

import RecommendFeedCard from '../FeedCard';
import {PreviewFourCardView} from './RecommendPreviewFourCard.styles';

import useMutatePostLike from 'src/querys/useMutatePostLike';
import {RootState} from 'src/redux/store';
import {Post} from 'src/types';

interface Props {
  data?: Array<Post>;
  isLoading: boolean;
  onPress?: onPressFeedCardHandler;
}

type onPressFeedCardHandler = (id: number) => () => void;

const RecommendPreviewFourCard = ({data, isLoading, onPress}: Props) => {
  const queryClient = useQueryClient();
  const {mutate} = useMutatePostLike();
  const {userInfo} = useSelector((state: RootState) => state.userReducer);

  const fourPosts = useMemo(() => data?.slice(0, 6) || [], [data]);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

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
                mutate(
                  {targetId: id},
                  {
                    onSuccess: () => {
                      queryClient.invalidateQueries(['userLike']);
                    },
                  },
                );
              }}
              isMine={user.id === userInfo.id}
              {...(onPress ? {onPress: onPress(id)} : {})}
            />
          ),
      )}

      {isLoading && <ActivityIndicator size="large" />}
    </PreviewFourCardView>
  );
};

export default RecommendPreviewFourCard;
