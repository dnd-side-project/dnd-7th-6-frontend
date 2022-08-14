import React from 'react';
import {useSelector} from 'react-redux';

import {
  NickNameContainer,
  NickNameImageWrapper,
  NickNamenIconWrapper,
  NickNameText,
} from './NickNameView.styles';

import {RootState} from 'src/redux/store';

const NickNameView = () => {
  const data = useSelector((state: RootState) => state.userReducer.userInfo);
  return (
    <NickNameContainer>
      <NickNameImageWrapper />
      <NickNamenIconWrapper>
        <NickNameText>{data.name}</NickNameText>
      </NickNamenIconWrapper>
    </NickNameContainer>
  );
};

export default NickNameView;
