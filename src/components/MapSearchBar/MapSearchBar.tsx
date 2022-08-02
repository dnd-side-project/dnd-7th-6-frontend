import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';

import {PressableSearchIcon} from '../utils/Pressables/PressableIcons';
import {SearchBarCotainer, SearchBarIconWrapper, SearchBarText} from './MapSearchBar.styles';

const MapSearchBar = ({children}: PropsWithChildren) => {
  const navigation = useNavigation();
  return (
    <SearchBarCotainer onPress={() => navigation.navigate('BoothSearch' as never, {} as never)}>
      <SearchBarIconWrapper>
        <PressableSearchIcon />
      </SearchBarIconWrapper>
      <SearchBarText>{children}</SearchBarText>
    </SearchBarCotainer>
  );
};
export default MapSearchBar;
