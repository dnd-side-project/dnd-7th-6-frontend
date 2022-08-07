import React, {PropsWithChildren} from 'react';

import {ListHeader, SortButtonWrapper, SortingButton} from './CardListOrganism.styles';

const SortingListHeader = ({children}: PropsWithChildren<{}>) => {
  return (
    <ListHeader>
      <SortButtonWrapper>
        <SortingButton>{children}</SortingButton>
      </SortButtonWrapper>
    </ListHeader>
  );
};

export default SortingListHeader;
