import React from 'react';

import {SubBar, MainBar} from './ProgressBar.styles';

interface Props {
  length: number;
}

const ProgressBar = ({length}: Props) => {
  return (
    <MainBar length={length}>
      <SubBar length={length} />
    </MainBar>
  );
};

export default ProgressBar;
