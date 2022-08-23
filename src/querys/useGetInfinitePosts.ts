import {AxiosError} from 'axios';
import {QueryKey, useInfiniteQuery, UseInfiniteQueryOptions} from 'react-query';

import getPostsByTag from 'src/apis/getPostsByTag';
import {Post, ServerResponse} from 'src/types';

interface Parameter {
  page?: number;
  pageSize?: number;
  tagIdSet: number[];
  order: string;
}

const useGetInfinitePosts = (
  {tagIdSet, order}: Parameter,
  options?: Omit<
    UseInfiniteQueryOptions<
      ServerResponse<Post>,
      AxiosError<unknown, any>,
      ServerResponse<Post>,
      ServerResponse<Post>
    >,
    'queryKey' | 'queryFn'
  >,
) => {
  return useInfiniteQuery<ServerResponse<Post>, AxiosError, ServerResponse<Post>, QueryKey>(
    ['post'],
    ({pageParam = 0}) => {
      return getPostsByTag({page: pageParam, tagIdSet, order});
    },
    {
      getNextPageParam: lastPage => {
        return lastPage.totalPages - 1 <= lastPage.number ? undefined : lastPage.number + 1;
      },
      ...options,
    },
  );
};

export default useGetInfinitePosts;
