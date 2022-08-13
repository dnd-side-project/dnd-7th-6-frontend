import React, {PropsWithChildren} from 'react';

import {BoothNameText, IconWrapper, TextnIconWrapper} from './ReviewBoothName.styles';

import LocationIcon from 'src/icons/LocationIcon';

const ReviewBoothName = ({children}: PropsWithChildren) => {
  return (
    <TextnIconWrapper>
      <IconWrapper>
        <LocationIcon />
      </IconWrapper>
      <BoothNameText>{children}</BoothNameText>
    </TextnIconWrapper>
  );
};

export default ReviewBoothName;
