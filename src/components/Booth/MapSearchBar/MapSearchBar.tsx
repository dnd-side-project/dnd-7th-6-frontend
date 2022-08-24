import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';

import {SearchBarCotainer, SearchBarIconWrapper, SearchBarText} from './MapSearchBar.styles';

import {PressableSearchIcon} from 'src/components/utils/Pressables/PressableIcons';
import {RootState} from 'src/redux/store';

const MapSearchBar = () => {
  const navigation = useNavigation();
  const completeKeyword = useSelector((state: RootState) => state.mapReducer.completeKeyword);

  return (
    <SearchBarCotainer onPress={() => navigation.navigate('BoothSearch' as never, {} as never)}>
      <SearchBarIconWrapper>
        <PressableSearchIcon />
      </SearchBarIconWrapper>
      <SearchBarText>
        {completeKeyword ? completeKeyword : '구, 건물명, 역 등으로 검색해주세요'}
      </SearchBarText>
    </SearchBarCotainer>
  );
};
export default MapSearchBar;
