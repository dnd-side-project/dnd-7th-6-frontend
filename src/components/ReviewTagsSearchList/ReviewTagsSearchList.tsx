import React from 'react';

import {
  SearchBarSeparator,
  SearchListWrapper,
  SearchPlaceName,
} from './ReviewTagsSearchList.styles.';

const ReviewTagsSearchList = ({item}: any) => {
  return (
    <>
      <SearchListWrapper>
        <SearchPlaceName>#{item.keyword}</SearchPlaceName>
      </SearchListWrapper>
      <SearchBarSeparator />
    </>
  );
};

export default ReviewTagsSearchList;
