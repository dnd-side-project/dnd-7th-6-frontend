import {AxiosError} from 'axios';
import {useInfiniteQuery} from 'react-query';

import getPosts from 'src/apis/getPosts';
import {Post, ServerResponse} from 'src/types';

interface Parameter {
  order?: string;
  userId?: number;
}

const useGetPosts = ({order, userId}: Parameter, options?: any) => {
  return useInfiniteQuery<
    ServerResponse<Post>,
    AxiosError,
    ServerResponse<Post>,
    [string, string | undefined, number | undefined]
  >(
    ['post', order, userId],
    ({queryKey, pageParam = 0}) => getPosts({order: queryKey[1], page: pageParam, userId}),
    {
      getNextPageParam: lastPage => lastPage.number + 1,
      ...options,
    },
  );
};

export default useGetPosts;
