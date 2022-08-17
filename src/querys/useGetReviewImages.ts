import {AxiosError} from 'axios';
import {useQuery} from 'react-query';

import getReviewImages from 'src/apis/getReviewImages';
import {ReviewImage, ServerResponse} from 'src/types';

const useGetReviewImages = (photoBoothId: number) => {
  return useQuery<
    ServerResponse<ReviewImage>,
    AxiosError,
    ServerResponse<ReviewImage>,
    [string, number]
  >(['review-images', photoBoothId], ({queryKey}) => getReviewImages(queryKey[1]));
};

export default useGetReviewImages;
