import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native';

import {HeaderContainer, HeaderTitle, IconWrapper} from './BoothReviewHeader.styles';

import {PressableLeftArrowIcon} from 'src/components/utils/Pressables/PressableIcons';
type BackButtonOnPress = () => void;
const BoothReviewHeader = ({
  onPress,
  children,
}: {
  onPress?: BackButtonOnPress;
  children: PropsWithChildren<string>;
}) => {
  return (
    <SafeAreaView>
      <HeaderContainer>
        <IconWrapper>
          <PressableLeftArrowIcon onPress={onPress} />
        </IconWrapper>
        <HeaderTitle>{children}</HeaderTitle>
      </HeaderContainer>
    </SafeAreaView>
  );
};

export default BoothReviewHeader;
