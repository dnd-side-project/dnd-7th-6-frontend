import {useNavigation} from '@react-navigation/native';
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
  const navigation = useNavigation();
  const {isLoggedIn} = useSelector((state: RootState) => state.userReducer);

  const handleLike = () => {
    if (!isLoggedIn) {
      navigation.navigate('RouteLoginScreen' as never);
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
