import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {useQueryClient} from 'react-query';
import {useDispatch, useSelector} from 'react-redux';

import {style} from './PostListOrganism.styles';

import FeedCard from 'src/components/Recommend/FeedCard';
import useGetPosts from 'src/querys/useGetPosts';
import useMutatePostLike from 'src/querys/useMutatePostLike';
import {hideTabBar, showTabBar} from 'src/redux/actions/TabBarAction';
import {RootState} from 'src/redux/store';
import {RecommendParamList} from 'src/screens/RecommendScreen';

interface Props {
  userId: number;
  navigation: NativeStackNavigationProp<RecommendParamList, 'DiffUserPost', undefined>;
}

const PostListOrganism = ({userId, navigation}: Props) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const {data} = useGetPosts({userId});
  const {userInfo} = useSelector((state: RootState) => state.userReducer);
  const {mutate: likePost} = useMutatePostLike();

  const handleLikePost = (postId: number) => () => {
    likePost(
      {targetId: postId},
      {
        onSuccess: () => queryClient.invalidateQueries(['post']),
      },
    );
  };
  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const velocity = e.nativeEvent.velocity?.y;
    if (!velocity) {
      return;
    }
    if (velocity < 0) {
      dispatch(showTabBar());
    } else {
      dispatch(hideTabBar());
    }
  };
  const handlePressPost = (postId: number) => () => {
    dispatch(showTabBar());
    navigation.push('RecommendDetail' as never, {postId} as never);
  };

  useEffect(() => {
    return () => {
      dispatch(showTabBar());
    };
  }, []);

  if (!data) {
    return <></>;
  }

  return (
    <FlatList
      numColumns={2}
      onScroll={handleScroll}
      data={data.pages.flatMap(page => page.content)}
      renderItem={({item}) => (
        <FeedCard
          imgUrl={item.postImageSet[0].imageUrl}
          isLike={item.like}
          onLike={handleLikePost(item.id)}
          isMine={userInfo.id === userId}
          onPress={handlePressPost(item.id)}
        />
      )}
      style={style.flatList}
    />
  );
};

export default PostListOrganism;
