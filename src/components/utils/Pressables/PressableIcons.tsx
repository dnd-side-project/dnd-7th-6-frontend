import styled from '@emotion/native';
import React from 'react';
import {PressableProps} from 'react-native';

import BottomArrowIcon from 'src/icons/BottomArrowIcon';
import CancelIcon from 'src/icons/CancelIcon';
import CancelIconWhite from 'src/icons/CancelIconWhite';
import CheckButtonIcon24 from 'src/icons/CheckButtonIcon24';
import CheckButtonIcon36 from 'src/icons/CheckButtonIcon36';
import CloseIcon from 'src/icons/CloseIcon';
import DeleteIcon from 'src/icons/DeleteIcon';
import LeftArrowIcon from 'src/icons/LeftArrowIcon';
import LikeHeartIcon from 'src/icons/LikeHeartIcon';
import LikeIcon from 'src/icons/LikeIcon';
import MeetBallIcon from 'src/icons/MeetBallIcon';
import OnCheckButtonIcon24 from 'src/icons/OnCheckButtonIcon24';
import OnCheckButtonIcon36 from 'src/icons/OnCheckButtonIcon36';
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
export const PressableMeetBallIcon = makePressableComponent(MeetBallIcon);
export const PressableGeneralHeartIcon = makePressableComponent(LikeIcon);
export const PressableCloseIcon = makePressableComponent(CloseIcon);
export const PressableCheckButtonIcon24 = makePressableComponent(CheckButtonIcon24);
export const PressableCheckButtonIcon36 = makePressableComponent(CheckButtonIcon36);
export const PressableOnCheckButtonIcon24 = makePressableComponent(OnCheckButtonIcon24);
export const PressableOnCheckButtonIcon36 = makePressableComponent(OnCheckButtonIcon36);
