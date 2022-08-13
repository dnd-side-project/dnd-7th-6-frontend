import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';

import {SearchBarCotainer, SearchBarIconWrapper, SearchBarText} from './MapSearchBar.styles';

import {PressableSearchIcon} from 'src/components/utils/Pressables/PressableIcons';

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
