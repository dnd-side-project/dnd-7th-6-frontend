import React from 'react';
import {LayoutChangeEvent} from 'react-native';

import KeywordTagSection from '../KeywordTagSection';

import {PhotoBoothResponse} from 'src/types';

interface Props {
  booth?: PhotoBoothResponse;
  onLayout: (event: LayoutChangeEvent) => void;
}

const BoothConditionOrganism = ({booth, onLayout}: Props) => {
  if (!booth) {
    return <></>;
  }

  return (
    <KeywordTagSection
      id={booth.photoBooth.id}
      title="이 부스를 경험한 의견이에요"
      keywords={booth.tagSummary.BOOTH_CONDITION}
      onLayout={onLayout}
    />
  );
};

export default BoothConditionOrganism;
