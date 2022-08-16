import {useInfiniteQuery} from 'react-query';

import getInfiniteReviews from 'src/apis/getInfiniteReviews';
import {Review, ServerResponse} from 'src/types';

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

const useGetInfiniteReviewsMock = (photoBoothId: number) => {
  const data: ServerResponse<Review> = {
    content: [
      {
        id: 1,
        title: 'test22',
        content: 'test입니다',
        starScore: 1.0,
        status: 'ACTIVE',
        createdAt: '2022-08-16T02:16:39',
        updatedAt: '2022-08-16T02:16:39',
        reviewTagSet: [
          {
            tag: {
              id: 11,
              title: '화질이 선명해요',
              keyword: '선명한 화질',
              photoBoothCount: 1,
              reviewCount: 3,
              postCount: 0,
              tagIconImageUrl: 'public/tag/Photo_01_Picture_Quality.png',
              tagType: 'PHOTO_CONDITION',
            },
          },
          {
            tag: {
              id: 1,
              title: '소품 상태가 깔끔해요',
              keyword: '깔끔한 소품',
              photoBoothCount: 2,
              reviewCount: 3,
              postCount: 5,
              tagIconImageUrl: 'public/tag/Booth_01_Clean.png',
              tagType: 'BOOTH_CONDITION',
            },
          },
          {
            tag: {
              id: 2,
              title: '파우더룸이 잘 되어있어요',
              keyword: '파우더룸',
              photoBoothCount: 1,
              reviewCount: 4,
              postCount: 4,
              tagIconImageUrl: 'public/tag/Booth_09_Powder_Room.png',
              tagType: 'BOOTH_CONDITION',
            },
          },
          {
            tag: {
              id: 10,
              title: '배경색이 다양해요',
              keyword: '배경색이 다양해요',
              photoBoothCount: 1,
              reviewCount: 3,
              postCount: 0,
              tagIconImageUrl: 'public/tag/Booth_05_BG_Color.png',
              tagType: 'BOOTH_CONDITION',
            },
          },
        ],
        reviewImageSet: [
          {
            id: 1,
            imageUrl:
              'https://hot6.s3.ap-northeast-2.amazonaws.com/public/review/7f768d8cb8538602c28184830b974bbc.png',
            imageOrder: 1,
            like: false,
          },
        ],
        user: {
          id: 2,
          email: '111@naver.com',
          name: 'photalks_user_2',
          status: 'ACTIVE',
          userRole: 'USER',
          provider: 'NAVER',
          providerId: 'asdfsdfsdfd',
        },
      },
      {
        id: 2,
        title: 'test22',
        content: 'test입니다',
        starScore: 1.0,
        status: 'ACTIVE',
        createdAt: '2022-08-16T02:16:45',
        updatedAt: '2022-08-16T02:16:45',
        reviewTagSet: [
          {
            tag: {
              id: 11,
              title: '화질이 선명해요',
              keyword: '선명한 화질',
              photoBoothCount: 1,
              reviewCount: 3,
              postCount: 0,
              tagIconImageUrl: 'public/tag/Photo_01_Picture_Quality.png',
              tagType: 'PHOTO_CONDITION',
            },
          },
          {
            tag: {
              id: 10,
              title: '배경색이 다양해요',
              keyword: '배경색이 다양해요',
              photoBoothCount: 1,
              reviewCount: 3,
              postCount: 0,
              tagIconImageUrl: 'public/tag/Booth_05_BG_Color.png',
              tagType: 'BOOTH_CONDITION',
            },
          },
          {
            tag: {
              id: 1,
              title: '소품 상태가 깔끔해요',
              keyword: '깔끔한 소품',
              photoBoothCount: 2,
              reviewCount: 3,
              postCount: 5,
              tagIconImageUrl: 'public/tag/Booth_01_Clean.png',
              tagType: 'BOOTH_CONDITION',
            },
          },
          {
            tag: {
              id: 2,
              title: '파우더룸이 잘 되어있어요',
              keyword: '파우더룸',
              photoBoothCount: 1,
              reviewCount: 4,
              postCount: 4,
              tagIconImageUrl: 'public/tag/Booth_09_Powder_Room.png',
              tagType: 'BOOTH_CONDITION',
            },
          },
        ],
        reviewImageSet: [
          {
            id: 2,
            imageUrl:
              'https://hot6.s3.ap-northeast-2.amazonaws.com/public/review/7832eb266eef8846e17fc256ca0edf08.png',
            imageOrder: 1,
            like: false,
          },
        ],
        user: {
          id: 2,
          email: '111@naver.com',
          name: 'photalks_user_2',
          status: 'ACTIVE',
          userRole: 'USER',
          provider: 'NAVER',
          providerId: 'asdfsdfsdfd',
        },
      },
      {
        id: 3,
        title: 'test22',
        content: 'test입니다',
        starScore: 1.0,
        status: 'ACTIVE',
        createdAt: '2022-08-16T02:16:47',
        updatedAt: '2022-08-16T02:16:47',
        reviewTagSet: [
          {
            tag: {
              id: 1,
              title: '소품 상태가 깔끔해요',
              keyword: '깔끔한 소품',
              photoBoothCount: 2,
              reviewCount: 3,
              postCount: 5,
              tagIconImageUrl: 'public/tag/Booth_01_Clean.png',
              tagType: 'BOOTH_CONDITION',
            },
          },
          {
            tag: {
              id: 11,
              title: '화질이 선명해요',
              keyword: '선명한 화질',
              photoBoothCount: 1,
              reviewCount: 3,
              postCount: 0,
              tagIconImageUrl: 'public/tag/Photo_01_Picture_Quality.png',
              tagType: 'PHOTO_CONDITION',
            },
          },
          {
            tag: {
              id: 2,
              title: '파우더룸이 잘 되어있어요',
              keyword: '파우더룸',
              photoBoothCount: 1,
              reviewCount: 4,
              postCount: 4,
              tagIconImageUrl: 'public/tag/Booth_09_Powder_Room.png',
              tagType: 'BOOTH_CONDITION',
            },
          },
          {
            tag: {
              id: 10,
              title: '배경색이 다양해요',
              keyword: '배경색이 다양해요',
              photoBoothCount: 1,
              reviewCount: 3,
              postCount: 0,
              tagIconImageUrl: 'public/tag/Booth_05_BG_Color.png',
              tagType: 'BOOTH_CONDITION',
            },
          },
        ],
        reviewImageSet: [
          {
            id: 3,
            imageUrl:
              'https://hot6.s3.ap-northeast-2.amazonaws.com/public/review/7d57aea19d9cf1e38d815da427d409e1.png',
            imageOrder: 1,
            like: false,
          },
        ],
        user: {
          id: 2,
          email: '111@naver.com',
          name: 'photalks_user_2',
          status: 'ACTIVE',
          userRole: 'USER',
          provider: 'NAVER',
          providerId: 'asdfsdfsdfd',
        },
      },
    ],
    totalPages: 1,
    totalElements: 3,
    numberOfElements: 3,
    size: 10,
    number: 0,
    sort: null,
  };

  return data;
};

export default useGetInfiniteReviewsMock;
