import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {PressableProps} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import PressableSubmit from '../Pressables/PressableSubmit';
import ProgressBar from '../ProgressBar';
import {Container, ProgressBarWrapper} from './PostWriteTabBar.styles';

import {hideTabBar} from 'src/redux/actions/TabBarAction';
import {RootState} from 'src/redux/store';

const PostWriteTabBar = ({...props}: PropsWithChildren<PressableProps>) => {
  const {screenIndex} = useSelector((state: RootState) => state.postWriteReducer);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const screens = ['PostWriteMain', 'SelectTag', 'Summary', 'ExitPostWrite'];

  return (
    <Container>
      <ProgressBarWrapper>
        <ProgressBar index={screenIndex} total={4} />
      </ProgressBarWrapper>
      <PressableSubmit
        {...props}
        onPress={() => {
          navigation.navigate(screens[screenIndex + 1] as never);
          dispatch(hideTabBar());
        }}>
        {screenIndex < 2 ? '다음' : '완료'}
      </PressableSubmit>
    </Container>
  );
};

export default PostWriteTabBar;
