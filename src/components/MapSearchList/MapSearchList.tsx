import React, {useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

import MapLocationSearchList from '../MapLocationSearchList';
import {SearchListView} from './MapSearchList.styles';

import useDebounce from 'src/hooks/useDebounce';
import useGetSearchedLocation from 'src/querys/useGetSearchedLocation';
import {RootState} from 'src/redux/store';

const MapSearchList = () => {
  const keyword: string = useSelector((state: RootState) => state.mapReducer.searchKeyword);
  const {data, refetch} = useGetSearchedLocation(keyword);
  const debounce = useDebounce(refetch, 500);
  useEffect(() => {
    if (!keyword) {
      return;
    }
    debounce();
  }, [keyword]);
  return (
    <SearchListView>
      <FlatList
        renderItem={item => {
          return <MapLocationSearchList item={item?.item} />;
        }}
        data={data?.documents}
      />
    </SearchListView>
  );
};

export default MapSearchList;
