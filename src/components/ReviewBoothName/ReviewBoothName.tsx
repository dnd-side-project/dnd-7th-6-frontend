import React, {PropsWithChildren} from 'react';

import {BoothNameText, TextnIconWrapper} from './ReviewBoothName.styles';

import LocationIcon from 'src/icons/LocationIcon';

const ReviewBoothName = ({children}: PropsWithChildren) => {
  return (
    <TextnIconWrapper>
      <LocationIcon />
      <BoothNameText>{children}</BoothNameText>
    </TextnIconWrapper>
  );
};

export default ReviewBoothName;
