import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';

import {HeaderContainer, HeaderTitle, IconContainer, SpecIconWrapper} from './RecordHeader.styles';

import {PressableSettingIcon} from 'src/components/utils/Pressables/PressableIcons';

const RecordHeader = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <HeaderContainer>
        <HeaderTitle>기록</HeaderTitle>
        <IconContainer>
          <SpecIconWrapper>
            <PressableSettingIcon
              onPress={() => navigation.navigate('RouteSettingScreen' as never)}
            />
          </SpecIconWrapper>
        </IconContainer>
      </HeaderContainer>
    </SafeAreaView>
  );
};

export default RecordHeader;
