import React from 'react';
import {useQueryClient} from 'react-query';
import {useSelector} from 'react-redux';

import SimpleLikeButton from '../Button/LikeButton/SimpleLikeButton';
import {Contents, DateText, Header, Username} from './UserReviewView.styles';

import useMutatePostLike from 'src/querys/useMutatePostLike';
import {RootState} from 'src/redux/store';
import {Post} from 'src/types';
import toDateFormat from 'src/utils/toDateFormat';

interface Props {
  post: Post;
}

const UserReviewView = ({post}: Props) => {
  const queryClient = useQueryClient();
  const {userInfo} = useSelector((state: RootState) => state.userReducer);
  const {mutate: likePost} = useMutatePostLike();

  const handlePostLike = () => {
    likePost(
      {targetId: post.id},
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['post']);
        },
      },
    );
  };

  return (
    <>
      <Header>
        <DateText>{toDateFormat(new Date(post.createdAt))}</DateText>
        {userInfo.id === post.user.id || (
          <SimpleLikeButton isActive={post.like} onPress={handlePostLike} />
        )}
      </Header>
      <Username>@{post.user.name}</Username>
      <Contents>{post.content}</Contents>
    </>
  );
};

export default UserReviewView;
