import {AxiosError} from 'axios';
import {useInfiniteQuery} from 'react-query';

import getPostsByTag from 'src/apis/getPostsByTag';
import {Post, ServerResponse} from 'src/types';

interface Parameter {
  page?: number;
  pageSize?: number;
  key?: string;
  tagIdSet?: number[];
  order: string;
}

const useGetInfinitePosts = ({tagIdSet = [], order, key}: Parameter, options?: any) => {
  return useInfiniteQuery<
    ServerResponse<Post>,
    AxiosError,
    ServerResponse<Post>,
    [string, string, string | undefined, number[]]
  >(
    ['post', order, key, tagIdSet],
    ({pageParam = 0, queryKey}) => {
      return getPostsByTag({page: pageParam, tagIdSet: queryKey[3], order: queryKey[1]});
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
