import React from 'react';
import {ScrollView} from 'react-native';

import BoothConditionOrganism from '../BoothConditionOrganism';
import GridPhotoOrganism from '../GridPhotoOrganism';
import PhotoConditionOrganism from '../PhotoConditionOrganism';
import ReviewOrganism from '../ReviewOrganism';

import Boundary from 'src/components/PostWrite/Boundary';

interface Props {
  id: number;
}

const InnerScrollView = ({id}: Props) => {
  return (
    <ScrollView>
      <BoothConditionOrganism id={id} />
      <PhotoConditionOrganism id={id} />
      <Boundary />
      <GridPhotoOrganism id={id} />
      <Boundary />
      <ReviewOrganism />
    </ScrollView>
  );
};

export default InnerScrollView;
