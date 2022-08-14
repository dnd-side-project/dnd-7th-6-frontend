import React from 'react';
import {SafeAreaView} from 'react-native';

import {HeaderContainer, HeaderTitle, IconContainer, SpecIconWrapper} from './RecordHeader.styles';

import {
  PressableRecordUploadIcon,
  PressableSettingIcon,
} from 'src/components/utils/Pressables/PressableIcons';

const RecordHeader = () => {
  return (
    <SafeAreaView>
      <HeaderContainer>
        <HeaderTitle>기록</HeaderTitle>
        <IconContainer>
          <PressableRecordUploadIcon />
          <SpecIconWrapper>
            <PressableSettingIcon />
          </SpecIconWrapper>
        </IconContainer>
      </HeaderContainer>
    </SafeAreaView>
  );
};

export default RecordHeader;
