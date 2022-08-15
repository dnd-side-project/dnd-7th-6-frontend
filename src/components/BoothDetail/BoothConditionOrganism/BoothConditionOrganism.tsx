import React from 'react';

import KeywordTagSection from '../KeywordTagSection';

import useGetPhotoBoothMock from 'src/querys/useGetPhotoBooth';

interface Props {
  id: number;
}

const BoothConditionOrganism = ({id}: Props) => {
  const data = useGetPhotoBoothMock(id);

  return (
    <KeywordTagSection
      id={id}
      title="이 부스를 경험한 의견이에요"
      keywords={data.tagSummary.BOOTH_CONDITION}
    />
  );
};

export default BoothConditionOrganism;
