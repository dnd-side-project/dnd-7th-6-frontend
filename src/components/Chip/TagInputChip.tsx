import React, {PropsWithChildren} from 'react';
import {PressableProps, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {PressableCancelIcon} from '../utils/Pressables/PressableIcons';
import {Container, Title} from './TagInputChip.styles';

import {changeTagData} from 'src/redux/actions/MapAction';
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
  const tagData: any = useSelector((state: RootState) => state.mapReducer.tagData);
  const dispatch = useDispatch();
  const deleteOnPress = (indexs: number | undefined) => {
    const nextData = [...tagData].filter((item, i) => {
      return indexs !== i;
    });
    dispatch(changeTagData(nextData));
  };
  return (
    <Container {...props} active={active} index={index}>
      {active ? <Title active={active}>{children}</Title> : <View>{children}</View>}

      {active ? <PressableCancelIcon onPress={() => deleteOnPress(index)} /> : <></>}
    </Container>
  );
};

export default TagInputChip;
