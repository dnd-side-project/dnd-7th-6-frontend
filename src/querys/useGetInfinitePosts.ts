import {AxiosError} from 'axios';
import {useInfiniteQuery} from 'react-query';
import {useSelector} from 'react-redux';

import getPostsByTag from 'src/apis/getPostsByTag';
import {RootState} from 'src/redux/store';
import {Post, ServerResponse} from 'src/types';

interface Parameter {
  page?: number;
  pageSize?: number;
  key?: string;
  tagIdSet?: number[];
  order: string;
}

const useGetInfinitePosts = ({tagIdSet = [], order, key}: Parameter, options?: any) => {
  const {isSettingInterceptor} = useSelector((state: RootState) => state.userReducer);

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
      enabled: isSettingInterceptor,
      ...options,
    },
  );
};

export default useGetInfinitePosts;
