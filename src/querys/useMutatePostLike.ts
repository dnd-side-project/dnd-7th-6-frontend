import {useMutation, useQueryClient} from 'react-query';

import mutatePostLike from 'src/apis/mutatePostLike';
import {Post} from 'src/types';

const useMutatePostLike = () => {
  const queryClient = useQueryClient();

  return useMutation((id: number) => mutatePostLike(id), {
    onMutate: (targetId: number) => {
      const oldPosts = queryClient.getQueryData(['post']);
      queryClient.cancelQueries(['post']);
      queryClient.setQueryData(['post'], (oldData: any) => ({
        ...oldData,
        pages: oldData.pages.map((page: any) => ({
          ...page,
          content: page.content.map((post: Post) =>
            post.id === targetId ? {...post, like: !post.like} : {...post},
          ),
        })),
      }));
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
