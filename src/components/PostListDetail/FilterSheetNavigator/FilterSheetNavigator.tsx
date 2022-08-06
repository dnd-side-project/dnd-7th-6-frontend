import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Container, IconWrapper, Label, LabelWrapper} from './FilterSheetNavigator.styles';

import DotIcon from 'src/icons/DotIcon';
import {changeFocus} from 'src/redux/actions/PostAction';
import {RootState} from 'src/redux/store';
import theme from 'src/styles/Theme';

const FilterSheetNavigator = () => {
  const {focusedFilter, filteredBrand, filteredHeadcount, filteredPose, filteredFrame} =
    useSelector((state: RootState) => state.postReducer);
  const dispatch = useDispatch();
  const labels = ['브랜드', '인원', '포즈컨셉', '프레임'];
  const filtered = [filteredBrand, filteredHeadcount, filteredPose, filteredFrame];

  const checkFiltered = (node: any): boolean => {
    if (typeof node === 'boolean') {
      return node;
    }
    return Object.keys(node).reduce((result, key) => {
      if (result) {
        return true;
      }
      if (typeof node[key] !== 'boolean') {
        return checkFiltered(node[key]);
      }
      return node[key];
    }, false);
  };

  const handlePressLabel = (index: number) => () => {
    dispatch(changeFocus(index));
  };

  return (
    <Container>
      {labels.map((label, i) => (
        <LabelWrapper key={i}>
          <Label selected={focusedFilter === i} onPress={handlePressLabel(i)}>
            {label}
          </Label>
          <IconWrapper>
            {!checkFiltered(filtered[i]) || <DotIcon color={theme.colors.primary[1].normal} />}
          </IconWrapper>
        </LabelWrapper>
      ))}
    </Container>
  );
};

export default FilterSheetNavigator;
