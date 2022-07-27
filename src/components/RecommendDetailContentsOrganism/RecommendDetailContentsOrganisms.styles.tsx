import styled from '@emotion/native';
import React from 'react';

import PressableIcon from '../PressableIcon';

import LikeIcon from 'src/icons/LikeIcon';
import UploadIcon from 'src/icons/UploadIcon';

export const Container = styled.View`
  padding: 18px;
  background-color: white;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0;
`;

export const TextSection = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Contents = styled.Text`
  padding: 8px 0;
  line-height: 19.6px;
`;

export const ChipWrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 3px;
  padding: 8px 0;
`;

export const ChipContainer = styled.View`
  padding: 0 8px 8px 0;
`;

export const Username = styled.Text`
  align-items: center;
  color: #444;
`;

export const Date = styled.Text`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 0px 16px;
  color: #aaa;
  font-size: 12px;
  line-height: 22px;
`;

export const IconWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.View`
  padding: 0 8px;
`;

export const PressableLikeIcon = () => {
  return (
    <PressableIcon>
      <LikeIcon />
    </PressableIcon>
  );
};

export const PressableUploadIcon = () => {
  return (
    <PressableIcon>
      <UploadIcon />
    </PressableIcon>
  );
};
