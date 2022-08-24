import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren, useEffect, useMemo, useState} from 'react';
import {PressableProps} from 'react-native';
import {useQueryClient} from 'react-query';
import {useDispatch, useSelector} from 'react-redux';

import PressableSubmit from '../Pressables/PressableSubmit';
import ProgressBar from '../ProgressBar';
import {Container, ExitContainer, ProgressBarWrapper} from './PostWriteTabBar.styles';

import ExitNavigationOrganism from 'src/components/PostWrite/ExitNavigationOrganism';
import usePostWriteCondition from 'src/hooks/usePostWriteCondition';
import useModifyPost from 'src/querys/useModifyPost';
import useMutatePost from 'src/querys/useMutatePost';
import {changeModifyMode, changeScreen, clearPostWrite} from 'src/redux/actions/PostWriteAction';
import {hideTabBar} from 'src/redux/actions/TabBarAction';
import {RootState} from 'src/redux/store';

const PostWriteTabBar = ({...props}: PropsWithChildren<PressableProps>) => {
  const {screenIndex, isModifyMode, isPostModifyMode} = useSelector(
    (state: RootState) => state.postWriteReducer,
  );
  const queryClient = useQueryClient();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const inputPostData = useSelector((state: RootState) => state.postWriteReducer);
  const {mutate: mutatePost} = useMutatePost();
  const {mutate: modifyPost} = useModifyPost();
  const {getDisabled} = usePostWriteCondition();
  const tagIdSet = useMemo(
    () =>
      inputPostData.tags.reduce((list: string[], tag: {[key: string]: boolean}) => {
        return [...list, ...Object.keys(tag).filter(key => tag[key])];
      }, []),
    [inputPostData],
  );
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (disabled) {
      setTimeout(() => {
        setDisabled(false);
      }, 500);
    }
  }, [disabled]);
  const screens = ['PostWriteMain', 'SelectTag', 'CustomTag', 'Summary', 'ExitPostWrite'];
  const handlePressSubmit = () => {
    setDisabled(true);
    if (screenIndex === 3) {
      if (isPostModifyMode) {
        const {id, ...image} = inputPostData.image;
        modifyPost(
          {
            postId: inputPostData.modifyPostId,
            postUpdateRequest: {
              title: '',
              content: inputPostData.contents,
              tagIdList: tagIdSet.map((v: string) => parseInt(v, 10)),
              isPublic: inputPostData.isPublic,
              deleteImageIdList: inputPostData.deleteImageIdList,
              newTagKeywordList: inputPostData.customTags.filter(
                (tag: any) => typeof tag === 'string',
              ),
              postImageList: id ? [] : [image],
            },
          },
          {
            onSuccess: () => {
              queryClient.invalidateQueries(['userList']);
              queryClient.invalidateQueries(['post']);
              dispatch(changeScreen(4));
              navigation.navigate(screens[screenIndex + 1] as never);
              dispatch(clearPostWrite());
            },
          },
        );
        return;
      } else {
        mutatePost(
          {
            title: '',
            content: inputPostData.contents,
            tagIdList: tagIdSet,
            isPublic: inputPostData.isPublic,
            newTagKeywordList: inputPostData.customTags,
            postImageList: [inputPostData.image],
          },
          {
            onSuccess: () => {
              queryClient.invalidateQueries(['userList']);
              queryClient.invalidateQueries(['post']);
              dispatch(changeScreen(4));
              navigation.navigate(screens[screenIndex + 1] as never);
              dispatch(clearPostWrite());
            },
          },
        );
        return;
      }
    }
    if (isModifyMode) {
      navigation.navigate('Summary' as never);
      dispatch(changeModifyMode(false));
    } else {
      navigation.navigate(screens[screenIndex + 1] as never);
    }
    dispatch(hideTabBar());
  };
  return screenIndex === 4 ? (
    <ExitContainer>
      <ExitNavigationOrganism />
    </ExitContainer>
  ) : (
    <Container>
      <ProgressBarWrapper>
        {isModifyMode || <ProgressBar index={screenIndex} total={3} />}
      </ProgressBarWrapper>
      <PressableSubmit {...props} disabled={getDisabled() || disabled} onPress={handlePressSubmit}>
        {isModifyMode ? '완료' : screenIndex < 3 ? '다음' : '완료'}
      </PressableSubmit>
    </Container>
  );
};

export default PostWriteTabBar;
