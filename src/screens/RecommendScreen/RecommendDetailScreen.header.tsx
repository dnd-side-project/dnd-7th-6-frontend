import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import {useQueryClient} from 'react-query';
import {useDispatch, useSelector} from 'react-redux';

import {RecommendParamList} from '.';

import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import useDeletePost from 'src/querys/useDeletePost';
import useGetPost from 'src/querys/useGetPost';
import {startModifyPost} from 'src/redux/actions/PostWriteAction';
import {RootState} from 'src/redux/store';
import report from 'src/utils/report';

interface Props {
  navigation: NativeStackNavigationProp<RecommendParamList, 'RecommendDetail', undefined>;
  postId: number;
  isRecord?: boolean;
  isStorage?: boolean;
}

const RecommendDetailScreenHeader = ({navigation, postId, isRecord, isStorage}: Props) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const {userInfo} = useSelector((state: RootState) => state.userReducer);
  const {data} = useGetPost(postId);
  const {mutate: deletePost} = useDeletePost();
  const goBack = () => {
    if (isRecord) {
      navigation.reset({
        routes: [{name: 'RouteRecordScreen' as never}],
        index: 0,
      });
    } else if (isStorage) {
      navigation.reset({
        routes: [{name: 'StorageScreen' as never}],
        index: 0,
      });
    } else {
      navigation.goBack();
    }
  };
  const handleModifyPost = () => {
    if (!data) {
      return;
    }
    navigation.navigate('RoutePostWrite' as never, {isModifyMode: true} as never);
    dispatch(startModifyPost(data));
  };
  const handleDeletePost = () => {
    deletePost(postId, {
      onSuccess: () => {
        navigation.goBack();
        queryClient.invalidateQueries(['post'], {
          predicate: ({queryKey}) => queryKey[1] !== postId,
        });
        queryClient.invalidateQueries(['userList']);
      },
    });
  };
  const handleReport = () => {
    report({type: 'post', targetId: postId});
  };
  const myMenuItem = [
    {name: '수정', onPressItem: handleModifyPost},
    {name: '삭제', onPressItem: handleDeletePost},
  ];
  const diffUserMenuItem = [{name: '게시물 신고', onPressItem: handleReport}];

  useEffect(() => {
    const handler = () => {
      goBack();
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', handler);
    return BackHandler.removeEventListener('hardwareBackPress', handler);
  }, []);

  return (
    <LeftBackHeader
      onPressBack={goBack}
      menuItems={data?.user.id === userInfo.id ? myMenuItem : diffUserMenuItem}
    />
  );
};

export default RecommendDetailScreenHeader;
