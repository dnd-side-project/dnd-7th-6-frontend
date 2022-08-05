import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Container, Label, LabelWrapper} from './FilterSheetNavigator.styles';

import DotIcon from 'src/icons/DotIcon';
import {changeFocus} from 'src/redux/actions/PostAction';
import {RootState} from 'src/redux/store';
import theme from 'src/styles/Theme';

const FilterSheetNavigator = () => {
  const focus = useSelector((state: RootState) => state.postReducer.focusedFilter);
  const dispatch = useDispatch();
  const labels = ['브랜드', '인원', '포즈컨셉', '프레임'];

  const handlePressLabel = (index: number) => () => {
    dispatch(changeFocus(index));
  };

  return (
    <Container>
      {labels.map((label, i) => (
        <LabelWrapper key={i}>
          <Label selected={focus === i} onPress={handlePressLabel(i)}>
            {label}
          </Label>
          <DotIcon color={focus === i ? theme.colors.grayscale[8] : theme.colors.grayscale[5]} />
        </LabelWrapper>
      ))}
    </Container>
  );
};

export default FilterSheetNavigator;
