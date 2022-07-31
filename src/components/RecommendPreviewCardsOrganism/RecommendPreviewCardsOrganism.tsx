import React, {PropsWithChildren} from 'react';

import PressableAddition from '../PressableAddition';
import RecommendPreviewFourCard from '../RecommendPreviewFourCard';
import {SubHeadline2} from '../utils/Text';
import {ButtonWrapper, OrganismView, TitleWrapper} from './RecommendPreviewCardsOrganism.styles';

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

const RecommendPreviewCardsOrganism = ({children, data}: PropsWithChildren & Props) => {
  return (
    <OrganismView>
      <TitleWrapper>
        <SubHeadline2>{children}</SubHeadline2>
      </TitleWrapper>
      <RecommendPreviewFourCard data={data} />
      <ButtonWrapper>
        <PressableAddition>사진 더보기 </PressableAddition>
      </ButtonWrapper>
    </OrganismView>
  );
};

export default RecommendPreviewCardsOrganism;
