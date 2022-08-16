import React from 'react';
import {LayoutChangeEvent} from 'react-native';

import KeywordTagSection from '../KeywordTagSection';

import useGetPhotoBoothMock from 'src/querys/useGetPhotoBooth';

interface Props {
  id: number;
  onLayout: (event: LayoutChangeEvent) => void;
}

const BoothConditionOrganism = ({id, onLayout}: Props) => {
  const data = useGetPhotoBoothMock(id);

  return (
    <KeywordTagSection
      id={id}
      title="이 부스를 경험한 의견이에요"
      keywords={data.tagSummary.BOOTH_CONDITION}
      onLayout={onLayout}
    />
  );
};

export default BoothConditionOrganism;
