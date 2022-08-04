import React from 'react';

import {
  SearchAddressName,
  SearchBarSeparator,
  SearchListWrapper,
  SearchPlaceName,
} from './MapLocationSearchList.styles';

import {SearchLocationDatas} from 'src/types';

interface Props {
  item: SearchLocationDatas;
}

const MapLocationSearchList = (item: Props) => {
  return (
    <SearchListWrapper>
      <SearchPlaceName>{item?.item.place_name}</SearchPlaceName>
      <SearchAddressName>{item?.item.address_name}</SearchAddressName>
      <SearchBarSeparator />
    </SearchListWrapper>
  );
};

export default MapLocationSearchList;
