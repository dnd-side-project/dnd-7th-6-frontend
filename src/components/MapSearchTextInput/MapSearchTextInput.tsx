import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';

import {PressableSearchIcon} from '../utils/Pressables/PressableIcons';
import {SearchBarCotainer, SearchBarIconWrapper} from './MapSearchTextInput.styles';

const MapSearchTextInput = ({children}: PropsWithChildren) => {
  const navigation = useNavigation();
  return (
    <SearchBarCotainer onPress={() => navigation.navigate('BoothSearch' as never, {} as never)}>
      <SearchBarIconWrapper>
        <PressableSearchIcon />
      </SearchBarIconWrapper>
    </SearchBarCotainer>
  );
};
export default MapSearchTextInput;
