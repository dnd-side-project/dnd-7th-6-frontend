import {useNavigation} from '@react-navigation/native';
import React, {useMemo} from 'react';

import RecommendFeedCard from '../RecommendFeedCard';
import {PreviewFourCardView} from './RecommendPreviewFourCard.styles';

import {Post} from 'src/types';

interface Props {
  data: Array<Post>;
}

const RecommendPreviewFourCard = ({data}: Props) => {
  const fourPosts = useMemo(() => data.slice(0, 4), [data]);
  const navigation = useNavigation();

  const handlePressFeedCard = (id: number) => () => {
    navigation.navigate('RecommendDetail' as never, {postId: id} as never);
  };

  return (
    <PreviewFourCardView>
      {fourPosts.map(({id, postImageSet}) => (
        <RecommendFeedCard
          imgUrl={postImageSet[0].imageUrl}
          key={id}
          onPress={handlePressFeedCard(id)}
        />
      ))}
    </PreviewFourCardView>
  );
};

export default RecommendPreviewFourCard;
