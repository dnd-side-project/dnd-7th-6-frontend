import React, {PropsWithChildren} from 'react';
import {PressableProps} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {PressableCancelIcon} from '../utils/Pressables/PressableIcons';
import {ChipWrapper, Container, IconWrapper, Title} from './TagInputChip.styles';

import {changeTagData} from 'src/redux/actions/ReviewAction';
import {RootState} from 'src/redux/store';

interface Props {
  active?: boolean;
  index?: number;
}

const TagInputChip = ({
  children,
  active = false,
  index,
  ...props
}: PropsWithChildren<PressableProps & Props>) => {
  const tagData: any = useSelector((state: RootState) => state.reviewReducer.tagData);
  const dispatch = useDispatch();
  const deleteOnPress = (indexs: number | undefined) => {
    const nextData = [...tagData].filter((item, i) => {
      return indexs !== i;
    });
    dispatch(changeTagData(nextData));
  };
  return (
    <Container {...props} active={active} index={index}>
      {active ? (
        <ChipWrapper>
          <Title active={active}>{children}</Title>
        </ChipWrapper>
      ) : (
        <ChipWrapper>{children}</ChipWrapper>
      )}

      {active ? (
        <IconWrapper>
          <PressableCancelIcon onPress={() => deleteOnPress(index)} />
        </IconWrapper>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default TagInputChip;
