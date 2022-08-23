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

interface Props {
  navigation: NativeStackNavigationProp<RecommendParamList, 'RecommendDetail', undefined>;
  postId: number;
  isRecord?: boolean;
}

const RecommendDetailScreenHeader = ({navigation, postId, isRecord}: Props) => {
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
  const menuItem = [
    {name: '수정', onPressItem: handleModifyPost},
    {name: '삭제', onPressItem: handleDeletePost},
  ];

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
      menuItems={data?.user.id === userInfo.id ? menuItem : undefined}
    />
  );
};

export default RecommendDetailScreenHeader;
