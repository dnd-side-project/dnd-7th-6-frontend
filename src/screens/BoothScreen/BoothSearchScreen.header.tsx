import styled from '@emotion/native';
import React from 'react';

import {BoothScreenProps} from './BoothScreen';

import MapSearchTextInput from 'src/components/MapSearchTextInput';
import {PressableLeftArrowIcon} from 'src/components/utils/Pressables/PressableIcons';

export const BoothSearchHeaderStyle = (props: BoothScreenProps) => {
  props.navigation.setOptions({
    headerShown: true,
    headerShadowVisible: false,
    headerTransparent: false,
    headerBackVisible: false,
    headerTitle: () => <MapSearchTextInput />,
    headerLeft: () => <HeaderLeftContainer {...props} />,
  });
};

const HeaderLeftContainer = ({navigation}: BoothScreenProps) => {
  return (
    <HeaderLeftIconWrapper>
      <PressableLeftArrowIcon onPress={() => navigation.goBack()} />
    </HeaderLeftIconWrapper>
  );
};

const HeaderLeftIconWrapper = styled.View({
  height: '100%',
  justifyContent: 'center',
});
