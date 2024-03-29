import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  BrandContainer,
  DropdownContainer,
  DropdownObject,
  DropdownText,
  FilterScollView,
} from './MapFilterOrganism.styles';

import MapFilterBrandChip from 'src/components/Chip/MapFilterBrandChip';
import MapFilterChip from 'src/components/Chip/MapFilterChip';
import DismissDropDownView from 'src/components/utils/DismissDropDownView';
import useDebounce from 'src/hooks/useDebounce';
import useGetPhotoBoothFilter from 'src/querys/useGetPhotoBoothFilter';
import {changeFilteredBrandonMap, changeFilteredTagonMap} from 'src/redux/actions/MapAction';
import {RootState} from 'src/redux/store';

const MapFilterOrganism = () => {
  const {data} = useGetPhotoBoothFilter();
  const [brandDropdown, setBrandDropdown] = useState(false);
  const [brandOnPress, setBrandOnPress] = useState<any>();
  const dispatch = useDispatch();
  const brandChipOnPress = () => setBrandDropdown(!brandDropdown);
  const filteredTag = useSelector((state: RootState) => state.mapReducer.filteredTag);
  const filteredBrand = useSelector((state: RootState) => state.mapReducer.filteredBrand);
  const debounce = useDebounce((id: number) => dispatch(changeFilteredTagonMap(id)), 400);

  const handlePressChip = (id: number) => () => {
    debounce(id);
  };
  const handlePressDropdown = (id: number) => () => {
    dispatch(changeFilteredBrandonMap(id));
  };
  useEffect(() => {
    const value = Object.values(filteredBrand).filter((item: any) => {
      if (item) {
        return true;
      }
    });
    setBrandOnPress(value);
  }, [filteredBrand]);

  return (
    <DismissDropDownView setBrandDropdown={setBrandDropdown}>
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
            <DropdownContainer isSelected={brandOnPress.length > 0}>
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
                {tag.keyword}
              </MapFilterChip>
            );
          })
        }
      </FilterScollView>
    </DismissDropDownView>
  );
};

export default MapFilterOrganism;
