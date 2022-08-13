import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useDispatch} from 'react-redux';

import {
  SearchAddressName,
  SearchBarSeparator,
  SearchListWrapper,
  SearchPlaceName,
} from './MapLocationSearchList.styles';

import {changeMapCoord, inputSearchKeyword} from 'src/redux/actions/MapAction';
import {SearchLocationDatas} from 'src/types';

interface Props {
  item: SearchLocationDatas;
}

const MapLocationSearchList = ({item}: Props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <SearchListWrapper
      onPress={() => {
        dispatch(inputSearchKeyword(''));
        dispatch(changeMapCoord({latitude: parseFloat(item.y), longitude: parseFloat(item.x)}));
        navigation.goBack();
      }}>
      <SearchPlaceName>{item?.place_name}</SearchPlaceName>
      <SearchAddressName>{item?.address_name}</SearchAddressName>
      <SearchBarSeparator />
    </SearchListWrapper>
  );
};

export default MapLocationSearchList;
