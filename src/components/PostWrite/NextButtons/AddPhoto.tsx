import React from 'react';
import {useSelector} from 'react-redux';

import NextButtonOrganism from '../NextButtonOrganism';

import {RootState} from 'src/redux/store';

const AddPhotoNextButton = () => {
  const {image} = useSelector((state: RootState) => state.postWriteReducer);

  return (
    <NextButtonOrganism screenName="SelectTag" nextIndex={0} disabled={!image.uri}>
      다음
    </NextButtonOrganism>
  );
};

export default AddPhotoNextButton;
