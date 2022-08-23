import {useMutation, useQueryClient} from 'react-query';

import mutatePostLike from 'src/apis/mutatePostLike';
import {Post, UserLikeImage} from 'src/types';

const useMutatePostLike = () => {
  const queryClient = useQueryClient();

  return useMutation((id: number) => mutatePostLike(id), {
    onMutate: (targetId: number) => {
      const queryKeys = [
        ['post', 'popular', 'pose'],
        ['post', 'popular', 'postList'],
        ['post', 'latest', 'postList'],
      ];
      const oldPosts = queryKeys.map(key => queryClient.getQueryData(key));
      const oldUserLike = queryClient.getQueryData(['userLike']);

      const updater = (oldData: any) => {
        if (!oldData) {
          return;
        }
        return {
          ...oldData,
          pages: oldData.pages.map((page: any) => ({
            ...page,
            content: page.content.map((post: Post) =>
              post.id === targetId ? {...post, like: !post.like} : {...post},
            ),
          })),
        };
      };
      const userListUpdater = (oldData: any) => {
        if (!oldData) {
          return;
        }
        return {
          ...oldData,
          imageList: oldData.imageList.map((image: UserLikeImage) => ({
            ...image,
            like: image.id === targetId && image.type === 'POST' ? !image.like : image.like,
          })),
        };
      };

      queryKeys.forEach(key => {
        queryClient.cancelQueries(key);
      });
      queryClient.cancelQueries(['userLike']);
      queryKeys.forEach(key => {
        queryClient.setQueryData(key, updater);
      });
      queryClient.setQueryData(['userLike'], userListUpdater);

      return () => {
        queryKeys.forEach((key, i) => {
          queryClient.setQueryData(key, oldPosts[i]);
        });
        queryClient.setQueryData(['userLike'], oldUserLike);
      };
    },
    onError: (err, values, rollback) => {
      if (rollback) {
        rollback();
      }
      return Promise.reject(err);
    },
  });
};

export default useMutatePostLike;
