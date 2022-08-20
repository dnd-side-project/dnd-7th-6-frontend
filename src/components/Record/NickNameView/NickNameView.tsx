import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';

import {
  IconWrapper,
  NickNameContainer,
  NickNameImageWrapper,
  NickNamenIconWrapper,
  NickNameText,
} from './NickNameView.styles';

import EclipseStarIcon from 'src/icons/EclipseStarIcon';
import EditIcon from 'src/icons/EditIcon';
import {RootState} from 'src/redux/store';

const NickNameView = () => {
  const data = useSelector((state: RootState) => state.userReducer.userInfo);
  const navigation = useNavigation();
  return (
    <NickNameContainer>
      <NickNameImageWrapper>
        <EclipseStarIcon />
      </NickNameImageWrapper>
      <NickNamenIconWrapper
        onPress={() => {
          navigation.navigate('EditNameScreen' as never);
        }}>
        <NickNameText>{data.name}</NickNameText>
        <IconWrapper>
          <EditIcon />
        </IconWrapper>
      </NickNamenIconWrapper>
    </NickNameContainer>
  );
};

export default NickNameView;
