import React from 'react';

import {SearchListWrapper, SearchPlaceName} from './MapLocationSearchList.styles';

import {SearchLocationDatas} from 'src/types';

interface Props {
  item: SearchLocationDatas;
}

const MapLocationSearchList = (item: Props) => {
  console.log(item);
  return (
    <SearchListWrapper>
      <SearchPlaceName>{item?.item.address_name}</SearchPlaceName>
    </SearchListWrapper>
  );
};

export default MapLocationSearchList;
