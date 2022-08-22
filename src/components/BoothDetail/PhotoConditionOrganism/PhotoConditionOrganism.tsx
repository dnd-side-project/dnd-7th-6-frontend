import React from 'react';

import KeywordTagSection from '../KeywordTagSection';

import {PhotoBoothResponse} from 'src/types';

interface Props {
  booth?: PhotoBoothResponse;
}

const PhotoConditionOrganism = ({booth}: Props) => {
  if (!booth) {
    return <></>;
  }

  return (
    <KeywordTagSection
      id={booth.photoBooth.id}
      title="결과물은 이런 느낌이었어요"
      keywords={booth.tagSummary.PHOTO_CONDITION}
    />
  );
};

export default PhotoConditionOrganism;
