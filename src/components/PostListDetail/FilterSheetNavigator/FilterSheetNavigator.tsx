import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Container, IconWrapper, Label, LabelWrapper} from './FilterSheetNavigator.styles';

import DotIcon from 'src/icons/DotIcon';
import {changeFocus} from 'src/redux/actions/PostAction';
import {RootState} from 'src/redux/store';
import theme from 'src/styles/Theme';
import getSelectedItems from 'src/utils/getSelectedItems';

const FilterSheetNavigator = () => {
  const {focusedFilter, filteredBrand, filteredHeadcount, filteredPose, filteredFrame} =
    useSelector((state: RootState) => state.postReducer);
  const dispatch = useDispatch();
  const labels = ['브랜드', '인원', '포즈컨셉', '프레임'];
  const filtered = [filteredBrand, filteredHeadcount, filteredPose, filteredFrame];

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
            {!getSelectedItems(filtered[i]) || <DotIcon color={theme.colors.primary[1].normal} />}
          </IconWrapper>
        </LabelWrapper>
      ))}
    </Container>
  );
};

export default FilterSheetNavigator;
