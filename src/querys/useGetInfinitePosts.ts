import {AxiosError} from 'axios';
import {useInfiniteQuery} from 'react-query';

import getPostsByTag from 'src/apis/getPostsByTag';
import {Post, ServerResponse} from 'src/types';

interface Parameter {
  page?: number;
  pageSize?: number;
  tagIdSet: number[];
  order: string;
}

const useGetInfinitePosts = ({tagIdSet, order}: Parameter) => {
  return useInfiniteQuery<
    ServerResponse<Post>,
    AxiosError,
    ServerResponse<Post>,
    [string, string, string]
  >(
    ['posts', tagIdSet.join(','), order],
    ({pageParam = 0}) => getPostsByTag({page: pageParam, tagIdSet, order}),
    {
      getNextPageParam: lastPage => lastPage.number + 1,
    },
  );
};

export default useGetInfinitePosts;
