import React from 'react';

import BoothConditionOrganism from '../BoothConditionOrganism';
import DescriptionOrganism from '../DescriptionOrganism';
import ImageSliderOrganism from '../ImageSliderOrganism';
import PhotoConditionOrganism from '../PhotoConditionOrganism';
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
      <BoothConditionOrganism id={id} />
      <PhotoConditionOrganism id={id} />
    </ScrollContainer>
  );
};

export default OuterScrollView;
