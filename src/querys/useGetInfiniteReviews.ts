import {useInfiniteQuery} from 'react-query';

import getInfiniteReviews from 'src/apis/getInfiniteReviews';

const useGetInfiniteReviews = (photoBoothId: number) => {
  return useInfiniteQuery(
    ['reviews'],
    ({pageParam = 0}) => getInfiniteReviews({page: pageParam, photoBoothId}),
    {
      getNextPageParam: lastPage => {
        return lastPage.nextPage;
      },
    },
  );
};

export default useGetInfiniteReviews;
