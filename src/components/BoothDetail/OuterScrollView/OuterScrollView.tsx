import React from 'react';

import DescriptionOrganism from '../DescriptionOrganism';
import ImageSliderOrganism from '../ImageSliderOrganism';
import InnerScrollView from '../InnerScrollView/InnerScrollView';
import {ScrollContainer} from './OuterScrollView.styles';

interface Props {
  id: number;
  distance: number;
}

const OuterScrollView = ({id, distance}: Props) => {
  return (
    <ScrollContainer>
      <ImageSliderOrganism id={id} />
      <DescriptionOrganism id={id} distance={distance} />
      <InnerScrollView id={id} />
    </ScrollContainer>
  );
};

export default OuterScrollView;
