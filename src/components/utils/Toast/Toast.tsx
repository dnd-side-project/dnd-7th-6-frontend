import React, {useEffect} from 'react';

import {Container, Content} from './Toast.styles';

interface Props {
  content: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toast = ({content, isOpen, setIsOpen}: Props) => {
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsOpen(false), 1000);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Container>
          <Content>{content}</Content>
        </Container>
      )}
    </>
  );
};

export default Toast;
