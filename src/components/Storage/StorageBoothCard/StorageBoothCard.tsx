import React from 'react';
import {PressableProps} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';

import {
  BoothTitle,
  FeedCardContainer,
  IconContainer,
  ImageContainer,
  ReviewCountText,
  StarNReviewCountWrapper,
  StarScoreText,
  styles,
} from './StorageBoothCard.styles';

import LikeButton from 'src/components/utils/Button/LikeButton/LikeButton';
import ColorStarIcon14 from 'src/icons/ColorStarIcon14';
import {RootState} from 'src/redux/store';
import toLocaleString from 'src/utils/toLocaleString';

interface Props extends PressableProps {
  name: string;
  starScore: number;
  reviewCount: number;
  imgUrl: string;
  onLike: () => void;
  isLike: boolean;
  isMine?: boolean;
}

const StorageBoothCard = ({
  name,
  starScore,
  reviewCount,
  imgUrl,
  onLike,
  isLike,
  ...props
}: Props) => {
  const data = useSelector((state: RootState) => state.userReducer);
  const handleLike = () => {
    if (!data.isLoggedIn) {
      return;
    }
    onLike();
  };
  return (
    <FeedCardContainer>
      <ImageContainer {...props}>
        <FastImage style={styles.photoStyle} resizeMode="cover" source={{uri: imgUrl}} />
        <IconContainer>
          <LikeButton onPress={handleLike} isActive={isLike} />
        </IconContainer>
      </ImageContainer>
      <BoothTitle numberOfLines={1}>{name}</BoothTitle>
      <StarNReviewCountWrapper>
        <ColorStarIcon14 />
        <StarScoreText>{starScore.toFixed(1)}</StarScoreText>
        <ReviewCountText>{toLocaleString(reviewCount)}</ReviewCountText>
      </StarNReviewCountWrapper>
    </FeedCardContainer>
  );
};

export default StorageBoothCard;
