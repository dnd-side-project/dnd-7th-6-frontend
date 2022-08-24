import React, {PropsWithChildren, useState} from 'react';

import DropdownMenu from '../DropdownMenu';
import {PressableLeftArrowIcon, PressableMeetBallIcon} from '../Pressables/PressableIcons';
import {
  BackButtonWrapper,
  Container,
  DropdownWrapper,
  MenuButtonWrapper,
  Title,
} from './LeftBackHeader.styles';

interface Props {
  onPressBack: () => void;
  menuItems?: any;
}

const LeftBackHeader = ({children, onPressBack, menuItems}: PropsWithChildren<Props>) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <Container>
      <BackButtonWrapper>
        <PressableLeftArrowIcon onPress={onPressBack} />
      </BackButtonWrapper>
      <Title>{children}</Title>
      {!!menuItems && (
        <>
          <MenuButtonWrapper>
            <PressableMeetBallIcon onPress={() => setIsOpenMenu(prev => !prev)} />
          </MenuButtonWrapper>
          {isOpenMenu && (
            <DropdownWrapper>
              <DropdownMenu items={menuItems} />
            </DropdownWrapper>
          )}
        </>
      )}
    </Container>
  );
};

export default LeftBackHeader;
