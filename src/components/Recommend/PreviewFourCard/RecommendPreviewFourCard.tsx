import React, {useMemo} from 'react';

import RecommendFeedCard from '../FeedCard';
import {PreviewFourCardView} from './RecommendPreviewFourCard.styles';

import {Post} from 'src/types';

interface Props {
  data: Array<Post>;
  onPress?: onPressFeedCardHandler;
}

type onPressFeedCardHandler = (id: number) => () => void;

const RecommendPreviewFourCard = ({data, onPress}: Props) => {
  const fourPosts = useMemo(() => data.slice(0, 4), [data]);

  return (
    <PreviewFourCardView>
      {fourPosts.map(({id, postImageSet}) => (
        <RecommendFeedCard
          imgUrl={postImageSet[0].imageUrl}
          key={id}
          {...(onPress ? {onPress: onPress(id)} : {})}
        />
      ))}
    </PreviewFourCardView>
  );
};

export default RecommendPreviewFourCard;
