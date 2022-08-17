import {useInfiniteQuery} from 'react-query';

import getInfinitePosts from 'src/apis/getPosts';

interface Parameter {
  page?: number;
  pageSize?: number;
  tagIdSet: number[];
  order: string;
}

const useGetInfinitePosts = ({tagIdSet, order}: Parameter) => {
  return useInfiniteQuery(
    ['posts'],
    ({pageParam = 0}) => getInfinitePosts({page: pageParam, tagIdSet, order}),
    {
      getNextPageParam: lastPage => {
        return lastPage.nextPage;
      },
    },
  );
};

export default useGetInfinitePosts;
