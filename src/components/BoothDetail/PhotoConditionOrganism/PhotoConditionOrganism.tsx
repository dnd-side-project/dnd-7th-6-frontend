import React from 'react';

import KeywordTagSection from '../KeywordTagSection';

import useGetPhotoBooth from 'src/querys/useGetPhotoBooth';

interface Props {
  id: number;
}

const PhotoConditionOrganism = ({id}: Props) => {
  const {data} = useGetPhotoBooth(id);

  if (!data) {
    return <></>;
  }

  return (
    <KeywordTagSection
      id={id}
      title="결과물은 이런 느낌이었어요"
      keywords={data.tagSummary.PHOTO_CONDITION}
    />
  );
};

export default PhotoConditionOrganism;
