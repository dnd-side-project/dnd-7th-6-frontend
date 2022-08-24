import {AxiosError} from 'axios';
import {useInfiniteQuery} from 'react-query';
import {useSelector} from 'react-redux';

import getPosts from 'src/apis/getPosts';
import {RootState} from 'src/redux/store';
import {Post, ServerResponse} from 'src/types';

interface Parameter {
  order?: string;
  userId?: number;
  key?: string;
}

const useGetPosts = ({order, userId, key}: Parameter, options?: any) => {
  const {isSettingInterceptor, isLoggedIn} = useSelector((state: RootState) => state.userReducer);

  return useInfiniteQuery<
    ServerResponse<Post>,
    AxiosError,
    ServerResponse<Post>,
    [string, string | undefined, string | undefined]
  >(
    ['post', order, key],
    ({pageParam = 0, queryKey}) => getPosts({order: queryKey[1], page: pageParam, userId}),
    {
      getNextPageParam: lastPage => {
        return lastPage.totalPages - 1 <= lastPage.number ? undefined : lastPage.number + 1;
      },
      enabled: !isLoggedIn || isSettingInterceptor,
      ...options,
    },
  );
};

export default useGetPosts;
