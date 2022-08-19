import React from 'react';
import {PressableProps} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';

import {FeedCardContainer, IconContainer, styles} from './RecommendFeedCard.styles';

import {style} from 'src/components/Record/RecordOrganism/RecordOrganism.styles';
import LikeButton from 'src/components/utils/Button/LikeButton/LikeButton';
import {RootState} from 'src/redux/store';

interface Props extends PressableProps {
  imgUrl: string;
  onLike: () => void;
  isLike: boolean;
  isMine?: boolean;
}

const RecommendFeedCard = ({imgUrl, onLike, isLike, isMine, ...props}: Props) => {
  const data = useSelector((state: RootState) => state.userReducer);
  const handleLike = () => {
    if (!data.isLoggedIn) {
      return;
    }
    onLike();
  };

  if (isMine) {
    return (
      <FeedCardContainer {...props}>
        <FastImage style={style.recordFeedCard} resizeMode="cover" source={{uri: imgUrl}} />
      </FeedCardContainer>
    );
  }

  return (
    <FeedCardContainer {...props}>
      <FastImage style={styles.photoStyle} resizeMode="cover" source={{uri: imgUrl}} />
      <IconContainer>
        <LikeButton onPress={handleLike} isActive={isLike} />
      </IconContainer>
    </FeedCardContainer>
  );
};

export default RecommendFeedCard;
