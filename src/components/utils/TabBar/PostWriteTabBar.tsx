import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren, useMemo} from 'react';
import {PressableProps} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import PressableSubmit from '../Pressables/PressableSubmit';
import ProgressBar from '../ProgressBar';
import {Container, ProgressBarWrapper} from './PostWriteTabBar.styles';

import usePostWriteCondition from 'src/hooks/usePostWriteCondition';
import useMutatePost from 'src/querys/useMutatePost';
import {changeModifyMode, clearPostWrite} from 'src/redux/actions/PostWriteAction';
import {hideTabBar} from 'src/redux/actions/TabBarAction';
import {RootState} from 'src/redux/store';

const PostWriteTabBar = ({...props}: PropsWithChildren<PressableProps>) => {
  const {screenIndex, isModifyMode} = useSelector((state: RootState) => state.postWriteReducer);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const inputPostData = useSelector((state: RootState) => state.postWriteReducer);
  const post = useMutatePost();
  const {getDisabled} = usePostWriteCondition();
  const tagIdSet = useMemo(
    () =>
      inputPostData.tags.reduce((list: string[], tag: {[key: string]: boolean}) => {
        return [...list, ...Object.keys(tag).filter(key => tag[key])];
      }, []),
    [inputPostData],
  );
  const screens = ['PostWriteMain', 'SelectTag', 'CustomTag', 'Summary', 'ExitPostWrite'];

  const handlePressSubmit = () => {
    if (isModifyMode) {
      navigation.navigate('Summary' as never);
      dispatch(changeModifyMode(false));
    } else {
      navigation.navigate(screens[screenIndex + 1] as never);
    }
    dispatch(hideTabBar());
    if (screenIndex === 3) {
      post.mutate({
        title: '',
        content: inputPostData.contents,
        tagIdList: tagIdSet,
        isPublic: inputPostData.isPublic,
        newTagList: inputPostData.customTags,
        postImageList: [inputPostData.image],
      });
    }
    if (screenIndex === 4) {
      dispatch(clearPostWrite());
    }
  };

  return (
    <Container>
      <ProgressBarWrapper>
        {isModifyMode || <ProgressBar index={screenIndex} total={3} />}
      </ProgressBarWrapper>
      <PressableSubmit {...props} disabled={getDisabled()} onPress={handlePressSubmit}>
        {isModifyMode ? '완료' : screenIndex < 3 ? '다음' : '완료'}
      </PressableSubmit>
    </Container>
  );
};

export default PostWriteTabBar;
