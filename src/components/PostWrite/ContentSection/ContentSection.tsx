import React, {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import {
  Container,
  Contents,
  HeaderBox,
  ModifyButton,
  SubTitle,
  Title,
} from './ContentSection.styles';

interface Props {
  title: string;
  subTitle?: string;
  onPressRightIcon?: () => void;
}

const ContentSection = ({
  title,
  subTitle,
  onPressRightIcon,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Container>
      <HeaderBox>
        <Text>
          <Title>{title}</Title>
          {subTitle && <SubTitle>{subTitle}</SubTitle>}
        </Text>
        {onPressRightIcon && <ModifyButton>수정</ModifyButton>}
      </HeaderBox>
      <Contents>{children}</Contents>
    </Container>
  );
};

export default ContentSection;
