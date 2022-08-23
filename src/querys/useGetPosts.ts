import {AxiosError} from 'axios';
import {useInfiniteQuery} from 'react-query';
import {useSelector} from 'react-redux';

import getPosts from 'src/apis/getPosts';
import {RootState} from 'src/redux/store';
import {Post, ServerResponse} from 'src/types';

interface Parameter {
  order?: string;
  userId?: number;
}

const useGetPosts = ({order, userId}: Parameter, options?: any) => {
  const {isSettingInterceptor, isLoggedIn} = useSelector((state: RootState) => state.userReducer);

  return useInfiniteQuery<ServerResponse<Post>, AxiosError, ServerResponse<Post>, [string]>(
    ['post'],
    ({pageParam = 0}) => getPosts({order, page: pageParam, userId}),
    {
      getNextPageParam: lastPage => lastPage.number + 1,
      enabled: !isLoggedIn || isSettingInterceptor,
      ...options,
    },
  );
};

export default useGetPosts;
