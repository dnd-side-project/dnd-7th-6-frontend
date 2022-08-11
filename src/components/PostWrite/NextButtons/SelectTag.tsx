import React from 'react';
import {useSelector} from 'react-redux';

import NextButtonOrganism from '../NextButtonOrganism';

import {RootState} from 'src/redux/store';

const SelectTagNextButton = () => {
  const {tags} = useSelector((state: RootState) => state.postWriteReducer);

  const disabledPressableSubmit = tags
    .map((tag: any) => Object.entries(tag))
    .flat()
    .every(([_, selected]: any) => !selected);

  return (
    <NextButtonOrganism screenName="Summary" nextIndex={1} disabled={disabledPressableSubmit}>
      다음
    </NextButtonOrganism>
  );
};

export default SelectTagNextButton;
