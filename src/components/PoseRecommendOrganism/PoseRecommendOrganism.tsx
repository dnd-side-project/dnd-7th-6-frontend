import React, {PropsWithChildren} from 'react';

import PressableAddition from '../PressableAddition';
import RecommendPreviewFourCard from '../RecommendPreviewFourCard';
import {ButtonWrapper, OrganismView, TitleText, TitleWrapper} from './PoseRecommendOrganism.styles';

import {TestData} from 'src/TestData';

export interface Props {
  data: ReadonlyArray<renderItemList['item']>;
}

export type renderItemList = {
  item: {
    url: string;
    id: string;
    title: string;
  };
};

const PoseRecommendOrganism = ({children}: PropsWithChildren) => {
  //TO-DO data fetching
  return (
    <OrganismView>
      <TitleWrapper>
        <TitleText>{children}</TitleText>
      </TitleWrapper>
      <RecommendPreviewFourCard data={TestData} />
      <ButtonWrapper>
        <PressableAddition>사진 더보기</PressableAddition>
      </ButtonWrapper>
    </OrganismView>
  );
};

export default PoseRecommendOrganism;
