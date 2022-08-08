import {useInfiniteQuery} from 'react-query';

import getInfinitePosts from 'src/apis/getPosts';

interface Parameter {
  page?: number;
  pageSize?: number;
  tagIdSet: number[];
}

const useGetInfinitePosts = ({tagIdSet}: Parameter) => {
  return useInfiniteQuery(
    ['posts'],
    ({pageParam = 0}) => getInfinitePosts({page: pageParam, tagIdSet}),
    {
      getNextPageParam: lastPage => {
        return lastPage.nextPage;
      },
    },
  );
};

export default useGetInfinitePosts;
