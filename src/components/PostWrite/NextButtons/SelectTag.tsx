import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import NextButtonOrganism from '../NextButtonOrganism';

import {changeScreen} from 'src/redux/actions/PostWriteAction';
import {RootState} from 'src/redux/store';

const SelectTagNextButton = () => {
  const dispatch = useDispatch();
  const {tags} = useSelector((state: RootState) => state.postWriteReducer);

  const disabledPressableSubmit = tags
    .map((tag: any) => Object.entries(tag))
    .flat()
    .every(([_, selected]: any) => !selected);

  useEffect(() => {
    dispatch(changeScreen(1));
  }, []);

  return (
    <NextButtonOrganism screenName="Summary" nextIndex={1} disabled={disabledPressableSubmit}>
      다음
    </NextButtonOrganism>
  );
};

export default SelectTagNextButton;
