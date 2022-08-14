import styled from '@emotion/native';
import React from 'react';
import {PressableProps} from 'react-native';

import BottomArrowIcon from 'src/icons/BottomArrowIcon';
import CancelIcon from 'src/icons/CancelIcon';
import CancelIconWhite from 'src/icons/CancelIconWhite';
import DeleteIcon from 'src/icons/DeleteIcon';
import LeftArrowIcon from 'src/icons/LeftArrowIcon';
import LikeHeartIcon from 'src/icons/LikeHeartIcon';
import PlusIcon from 'src/icons/PlusIcon';
import RecordUploadIcon from 'src/icons/RecordUploadIcon';
import RefreshIcon from 'src/icons/RefreshIcon';
import RightArrowIcon from 'src/icons/RightArrowIcon';
import SearchIcon from 'src/icons/SearchIcon';
import SettingIcon from 'src/icons/SettingIcon';
import UploadIcon from 'src/icons/UploadIcon';

const PressableIcon = styled.Pressable({
  alignSelf: 'flex-start',
});

const makePressableComponent = (IconComponent: React.FC) => (props: PressableProps) => {
  return (
    <PressableIcon {...props}>
      <IconComponent />
    </PressableIcon>
  );
};

export const PressableUploadIcon = makePressableComponent(UploadIcon);
export const PressableLikeIcon = makePressableComponent(LikeHeartIcon);
export const PressableRightArrowIcon = makePressableComponent(RightArrowIcon);
export const PressableSearchIcon = makePressableComponent(SearchIcon);
export const PressableLeftArrowIcon = makePressableComponent(LeftArrowIcon);
export const PressableDeleteIcon = makePressableComponent(DeleteIcon);
export const PressableBottomArrowIcon = makePressableComponent(BottomArrowIcon);
export const PressableCancelIcon = makePressableComponent(CancelIcon);
export const PressableCancelWhiteIcon = makePressableComponent(CancelIconWhite);
export const PressableRefreshIcon = makePressableComponent(RefreshIcon);
export const PressablePlusIcon = makePressableComponent(PlusIcon);
export const PressableRecordUploadIcon = makePressableComponent(RecordUploadIcon);
export const PressableSettingIcon = makePressableComponent(SettingIcon);
