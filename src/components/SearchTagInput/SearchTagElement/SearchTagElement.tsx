import React from 'react';

import {SearchBarSeparator, SearchListWrapper, SearchPlaceName} from './SearchTagElement.styles';

import {PhotoBoothBrandTag} from 'src/types';

type onPressListSelect = () => void;

const SearchTagElement = ({
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

export default SearchTagElement;
