import React from 'react';
import {PhotoBoothBrandTag} from 'src/types';

import {
  SearchBarSeparator,
  SearchListWrapper,
  SearchPlaceName,
} from './ReviewTagsSearchList.styles.';
type onPressListSelect = () => void;

const ReviewTagsSearchList = ({
  item,
  onPress,
}: {
  item: PhotoBoothBrandTag;
  onPress?: onPressListSelect;
}) => {
  return (
    <>
      <SearchListWrapper onPress={onPress}>
        <SearchPlaceName>#{item.keyword}</SearchPlaceName>
      </SearchListWrapper>
      <SearchBarSeparator />
    </>
  );
};

export default ReviewTagsSearchList;
