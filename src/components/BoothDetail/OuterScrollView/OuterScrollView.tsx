import React from 'react';
import {ScrollView} from 'react-native';

import DescriptionOrganism from '../DescriptionOrganism';
import ImageSliderOrganism from '../ImageSliderOrganism';

interface Props {
  id: number;
  distance: number;
}

const OuterScrollView = ({id, distance}: Props) => {
  return (
    <ScrollView>
      <ImageSliderOrganism id={id} />
      <DescriptionOrganism id={id} distance={distance} />
    </ScrollView>
  );
};

export default OuterScrollView;
