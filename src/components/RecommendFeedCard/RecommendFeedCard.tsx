import React from 'react';
import FastImage from 'react-native-fast-image';

import {PressableLikeIcon} from '../utils/Pressables/PressableIcons';
import {FeedCardContainer, IconContainer, styles} from './RecommendFeedCard.styles';

interface Props {
  imgUrl: string;
}
const RecommendFeedCard = ({imgUrl}: Props) => {
  return (
    <FeedCardContainer>
      <FastImage
        style={styles.photoStyle}
        resizeMode="cover"
        source={{
          uri: imgUrl,
          //TO-DO (header, priority, etc)
        }}
      />
      <IconContainer>
        <PressableLikeIcon />
      </IconContainer>
    </FeedCardContainer>
  );
};

export default RecommendFeedCard;
