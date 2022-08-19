import {AxiosError} from 'axios';
import {useInfiniteQuery} from 'react-query';

import getReviewImages from 'src/apis/getReviewImages';
import {ReviewImage, ServerResponse} from 'src/types';

const useGetReviewImages = (photoBoothId: number) => {
  return useInfiniteQuery<
    ServerResponse<ReviewImage>,
    AxiosError,
    ServerResponse<ReviewImage>,
    [string, number]
  >(
    ['review-images', photoBoothId],
    ({queryKey, pageParam = 0}) => getReviewImages({photoBoothId: queryKey[1], page: pageParam}),
    {
      getNextPageParam: lastPage => lastPage.number + 1,
    },
  );
};

export default useGetReviewImages;
