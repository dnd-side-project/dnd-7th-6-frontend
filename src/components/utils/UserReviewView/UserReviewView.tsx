import React from 'react';
import {Text} from 'react-native';

import {PressableLikeIcon, PressableUploadIcon} from '../Pressables/PressableIcons';
import {
  Contents,
  DateText,
  Header,
  IconContainer,
  IconWrapper,
  Username,
} from './UserReviewView.styles';

import toDateFormat from 'src/utils/toDateFormat';

interface Props {
  writer: string;
  date: Date;
  contents: string;
  hasIcon?: boolean;
}

const UserReviewView = (props: Props) => {
  return (
    <>
      <Header>
        <Text>
          <Username>{props.writer} </Username>
          <DateText> {toDateFormat(props.date)}</DateText>
        </Text>
        {props.hasIcon && (
          <IconWrapper>
            <IconContainer>
              <PressableLikeIcon />
            </IconContainer>
            <IconContainer>
              <PressableUploadIcon />
            </IconContainer>
          </IconWrapper>
        )}
      </Header>
      <Contents>{props.contents}</Contents>
    </>
  );
};

export default UserReviewView;
