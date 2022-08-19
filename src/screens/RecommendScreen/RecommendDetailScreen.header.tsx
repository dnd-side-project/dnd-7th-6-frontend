import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {useQueryClient} from 'react-query';
import {useSelector} from 'react-redux';

import {RecommendParamList} from '.';

import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import useDeletePost from 'src/querys/useDeletePost';
import useGetPost from 'src/querys/useGetPost';
import {RootState} from 'src/redux/store';

interface Props {
  navigation: NativeStackNavigationProp<RecommendParamList, 'RecommendDetail', undefined>;
  postId: number;
}

const RecommendDetailScreenHeader = ({navigation, postId}: Props) => {
  const queryClient = useQueryClient();
  const {userInfo} = useSelector((state: RootState) => state.userReducer);
  const {data} = useGetPost(postId);
  const {mutate: deletePost} = useDeletePost();

  const handleModifyPost = () => {};
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

  return (
    <LeftBackHeader
      onPressBack={() => navigation.goBack()}
      menuItems={data?.user.id === userInfo.id ? menuItem : undefined}
    />
  );
};

export default RecommendDetailScreenHeader;
