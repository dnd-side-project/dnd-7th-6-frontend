import React from 'react';
import FastImage from 'react-native-fast-image';

import {CardContainer, styles} from './SquareCard.styles';

interface Props {
  imgUrl: string;
}

const SquareCard = ({imgUrl}: Props) => {
  return (
    <CardContainer>
      <FastImage
        style={styles.photoStyle}
        resizeMode="cover"
        source={{
          uri: imgUrl,
          //TO-DO (header, priority, etc)
        }}
      />
    </CardContainer>
  );
};

export default SquareCard;
