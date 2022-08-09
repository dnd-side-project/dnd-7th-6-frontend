import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import MapFilterBrandChip from '../MapFilterBrandChip';
import MapFilterChip from '../MapFilterChip';
import {
  BrandContainer,
  DropdownContainer,
  DropdownObject,
  DropdownText,
  FilterScollView,
} from './MapFilterOrganism.styles';

import useGetPhotoBoothFilter from 'src/querys/useGetPhotoBoothFilter';
import {changeFilteredBrandonMap, changeFilteredTagonMap} from 'src/redux/actions/MapAction';
import {RootState} from 'src/redux/store';

const MapFilterOrganism = () => {
  const {data} = useGetPhotoBoothFilter();
  const [brandDropdown, setBrandDropdown] = useState(false);
  const dispatch = useDispatch();
  const brandChipOnPress = () => setBrandDropdown(!brandDropdown);
  const filteredTag = useSelector((state: RootState) => state.mapReducer.filteredTag);
  const filteredBrand = useSelector((state: RootState) => state.mapReducer.filteredBrand);

  const handlePressChip = (id: number) => () => {
    dispatch(changeFilteredTagonMap(id));
  };
  const handlePressDropdown = (id: number) => () => {
    dispatch(changeFilteredBrandonMap(id));
  };
  return (
    <FilterScollView
      horizontal={true}
      scrollEnabled
      showsHorizontalScrollIndicator={false}
      nestedScrollEnabled>
      <BrandContainer>
        <MapFilterBrandChip onTouchStart={brandChipOnPress} selected={brandDropdown} key={null}>
          브랜드
        </MapFilterBrandChip>
        {brandDropdown && (
          <DropdownContainer>
            {
              //@ts-ignore
              data?.data.brandTagList.slice(0, 5).map(tag => {
                return (
                  <DropdownObject
                    key={tag.id}
                    selected={filteredBrand[tag.id]}
                    onPress={handlePressDropdown(tag.id)}>
                    <DropdownText selected={filteredBrand[tag.id]}>{tag.keyword}</DropdownText>
                  </DropdownObject>
                );
              })
            }
          </DropdownContainer>
        )}
      </BrandContainer>

      {
        //@ts-ignore
        data?.data.tagList.map(tag => {
          return (
            <MapFilterChip
              key={tag.id}
              selected={filteredTag[tag.id]}
              onPress={handlePressChip(tag.id)}>
              #{tag.keyword}
            </MapFilterChip>
          );
        })
      }
    </FilterScollView>
  );
};

export default MapFilterOrganism;
