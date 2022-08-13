import React from 'react';
import {PressableProps} from 'react-native';
import FastImage from 'react-native-fast-image';

import {FeedCardContainer, IconContainer, styles} from './RecommendFeedCard.styles';

import LikeButton from 'src/components/utils/Button/LikeButton/LikeButton';

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
        <LikeButton />
      </IconContainer>
    </FeedCardContainer>
  );
};

export default RecommendFeedCard;
