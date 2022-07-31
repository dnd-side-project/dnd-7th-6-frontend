import React, {PropsWithChildren} from 'react';

import PressableAddition from '../PressableAddition';
import RecommendPreviewFourCard from '../RecommendPreviewFourCard';
import {SubHeadline2} from '../utils/Text';
import {ButtonWrapper, OrganismView, TitleWrapper} from './FrameRecommendOrganism.styles';

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

const FrameRecommendOrganism = ({children}: PropsWithChildren) => {
  //TO-DO data fetching
  return (
    <OrganismView>
      <TitleWrapper>
        <SubHeadline2>{children}</SubHeadline2>
      </TitleWrapper>
      <RecommendPreviewFourCard data={TestData} />
      <ButtonWrapper>
        <PressableAddition>사진 더보기</PressableAddition>
      </ButtonWrapper>
    </OrganismView>
  );
};

export default FrameRecommendOrganism;
