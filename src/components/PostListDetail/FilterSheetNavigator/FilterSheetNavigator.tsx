import React from 'react';

import {Label} from './FilterSheetNavigator.styles';

interface Props {
  index: number;
  total: number;
}

const FilterSheetNavigator = ({index}: Props) => {
  const filterTitle = ['브랜드', '인원', '포즈컨셉', '프레임'];

  return <Label>{filterTitle[index]}</Label>;
};

export default FilterSheetNavigator;
