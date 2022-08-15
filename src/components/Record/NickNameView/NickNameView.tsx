import React from 'react';
import {useSelector} from 'react-redux';

import {
  IconWrapper,
  NickNameContainer,
  NickNameImageWrapper,
  NickNamenIconWrapper,
  NickNameText,
} from './NickNameView.styles';

import EditIcon from 'src/icons/EditIcon';
import {RootState} from 'src/redux/store';

const NickNameView = () => {
  const data = useSelector((state: RootState) => state.userReducer.userInfo);
  return (
    <NickNameContainer>
      <NickNameImageWrapper />
      <NickNamenIconWrapper>
        <NickNameText>{data.name}</NickNameText>
        <IconWrapper>
          <EditIcon />
        </IconWrapper>
      </NickNamenIconWrapper>
    </NickNameContainer>
  );
};

export default NickNameView;
