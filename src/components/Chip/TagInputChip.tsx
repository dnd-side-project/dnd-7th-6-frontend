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
  deleteOnPress?: (index?: number) => void;
}

const TagInputChip = ({
  children,
  active = false,
  index,
  deleteOnPress,
  ...props
}: PropsWithChildren<PressableProps & Props>) => {
  const tagData: any = useSelector((state: RootState) => state.reviewReducer.tagData);
  const dispatch = useDispatch();
  const legacyOnDelete = (indexs: number | undefined) => {
    const nextData = [...tagData].filter((item, i) => {
      return indexs !== i;
    });
    dispatch(changeTagData(nextData));
  };
  const handleDelete = deleteOnPress || legacyOnDelete;

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
          <PressableCancelIcon onPress={() => handleDelete(index)} />
        </IconWrapper>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default TagInputChip;
