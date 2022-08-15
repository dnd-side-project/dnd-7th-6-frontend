import React from 'react';

import KeywordTagSection from '../KeywordTagSection';

import useGetPhotoBoothMock from 'src/querys/useGetPhotoBooth';

interface Props {
  id: number;
}

const PhotoConditionOrganism = ({id}: Props) => {
  const data = useGetPhotoBoothMock(id);

  return (
    <KeywordTagSection
      id={id}
      title="결과물은 이런 느낌이었어요"
      keywords={data.tagSummary.PHOTO_CONDITION}
    />
  );
};

export default PhotoConditionOrganism;
