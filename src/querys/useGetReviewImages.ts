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

const useGetReviewImagesMock = (photoBoothId: number) => {
  const data = {
    content: [
      {
        id: 3,
        imageUrl:
          'https://hot6.s3.ap-northeast-2.amazonaws.com/public/review/7d57aea19d9cf1e38d815da427d409e1.png',
        imageOrder: 1,
        like: false,
      },
      {
        id: 2,
        imageUrl:
          'https://hot6.s3.ap-northeast-2.amazonaws.com/public/review/7832eb266eef8846e17fc256ca0edf08.png',
        imageOrder: 1,
        like: false,
      },
      {
        id: 1,
        imageUrl:
          'https://hot6.s3.ap-northeast-2.amazonaws.com/public/review/7f768d8cb8538602c28184830b974bbc.png',
        imageOrder: 1,
        like: true,
      },
    ],
    totalPages: 1,
    totalElements: 3,
    numberOfElements: 3,
    size: 50,
    number: 0,
    sort: null,
  };

  return data;
};

export default useGetReviewImagesMock;
