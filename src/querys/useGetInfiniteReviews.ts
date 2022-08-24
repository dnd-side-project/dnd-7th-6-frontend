import {AxiosError} from 'axios';
import {QueryKey, useInfiniteQuery} from 'react-query';

import getInfiniteReviews from 'src/apis/getInfiniteReviews';
import {Review, ServerResponse} from 'src/types';

const useGetInfiniteReviews = (photoBoothId: number) => {
  return useInfiniteQuery<ServerResponse<Review>, AxiosError, ServerResponse<Review>, QueryKey>(
    ['reviews'],
    ({pageParam = 0}) => getInfiniteReviews({page: pageParam, photoBoothId}),
    {
      getNextPageParam: lastPage => {
        return lastPage.totalPages - 1 <= lastPage.number ? undefined : lastPage.number + 1;
      },
      staleTime: 1000,
    },
  );
};

export default useGetInfiniteReviews;
