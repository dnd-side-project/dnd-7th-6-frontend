import {AxiosError} from 'axios';
import {useInfiniteQuery} from 'react-query';

import getReviewImages from 'src/apis/getReviewImages';
import {ReviewImage, ServerResponse} from 'src/types';

const useGetReviewImages = (photoBoothId: number, options?: any) => {
  return useInfiniteQuery<
    ServerResponse<ReviewImage>,
    AxiosError,
    ServerResponse<ReviewImage>,
    [string]
  >(['review-images'], ({pageParam = 0}) => getReviewImages({photoBoothId, page: pageParam}), {
    getNextPageParam: lastPage => {
      return lastPage.totalPages - 1 <= lastPage.number ? undefined : lastPage.number + 1;
    },
    enabled: !!photoBoothId,
    staleTime: 1000,
    ...options,
  });
};

export default useGetReviewImages;
