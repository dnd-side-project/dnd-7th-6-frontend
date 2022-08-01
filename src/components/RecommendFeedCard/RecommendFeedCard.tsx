import React from 'react';
import {PressableProps} from 'react-native';
import FastImage from 'react-native-fast-image';

import {PressableLikeIcon} from '../utils/Pressables/PressableIcons';
import {FeedCardContainer, IconContainer, styles} from './RecommendFeedCard.styles';

type Props = {imgUrl: string} & PressableProps;

const RecommendFeedCard = ({imgUrl, ...props}: Props) => {
  return (
    <FeedCardContainer {...props}>
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
