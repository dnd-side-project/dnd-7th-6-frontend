import {useMutation, useQueryClient} from 'react-query';

import mutatePostLike from 'src/apis/mutatePostLike';
import {Post} from 'src/types';

const useMutatePostLike = () => {
  const queryClient = useQueryClient();

  return useMutation((id: number) => mutatePostLike(id), {
    onMutate: (targetId: number) => {
      const oldPosts = queryClient.getQueryData(['post']);
      const updater = (oldData: any) =>
        !oldData.pages
          ? {}
          : {
              ...oldData,
              pages: oldData.pages.map((page: any) => ({
                ...page,
                content: page.content.map((post: Post) =>
                  post.id === targetId ? {...post, like: !post.like} : {...post},
                ),
              })),
            };
      queryClient.cancelQueries(['post', 'popular', 'pose']);
      queryClient.cancelQueries(['post', 'popular', 'postList']);
      queryClient.cancelQueries(['post', 'latest', 'postList']);
      queryClient.setQueryData(['post', 'popular', 'pose'], updater);
      queryClient.setQueryData(['post', 'popular', 'postList'], updater);
      queryClient.setQueryData(['post', 'latest', 'postList'], updater);
      return () => queryClient.setQueryData(['post'], oldPosts);
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
