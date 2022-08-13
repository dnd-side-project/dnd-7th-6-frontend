import * as React from 'react';

import ReviewSummary from 'src/components/utils/ReviewSummary';

const StorageScreen = () => {
  const data: any = {
    id: 2,
    title: 'test22',
    content: 'test입니다',
    likeCount: 0,
    status: 'ACTIVE',
    starScore: 3.5,
    createdAt: '2022-07-31T23:36:02',
    updatedAt: '2022-07-31T23:36:02',
    reviewTagSet: [
      {
        tag: {
          id: 1,
          title: '소품 상태가 깔끔해요',
          reviewCount: 1,
          postCount: 0,
          tagType: 'PHOTO_BOOTH',
        },
      },
      {
        tag: {
          id: 1,
          title: '파우더룸이 잘 되어있어요',
          reviewCount: 1,
          postCount: 0,
          tagType: 'PHOTO_BOOTH',
        },
      },
      {
        tag: {
          id: 1,
          title: '부스공간이 넓어요',
          reviewCount: 1,
          postCount: 0,
          tagType: 'PHOTO_BOOTH',
        },
      },
      {
        tag: {
          id: 1,
          title: '카드결제가 가능해요',
          reviewCount: 1,
          postCount: 0,
          tagType: 'PHOTO_BOOTH',
        },
      },
      {
        tag: {
          id: 1,
          title: '화질이 선명해요',
          reviewCount: 1,
          postCount: 0,
          tagType: 'PHOTO_BOOTH',
        },
      },
      {
        tag: {
          id: 1,
          title: '보정이 자연스러워요',
          reviewCount: 1,
          postCount: 0,
          tagType: 'PHOTO_BOOTH',
        },
      },
      {
        tag: {
          id: 1,
          title: '생각보다 하얗게 나와요 ',
          reviewCount: 1,
          postCount: 0,
          tagType: 'PHOTO_BOOTH',
        },
      },
      {
        tag: {
          id: 1,
          title: '빛번짐이 있어요',
          reviewCount: 1,
          postCount: 0,
          tagType: 'PHOTO_BOOTH',
        },
      },
      {
        tag: {
          id: 1,
          title: '배경색 예쁨',
          reviewCount: 1,
          postCount: 0,
          tagType: 'CUSTOM',
        },
      },
      {
        tag: {
          id: 1,
          title: '사람많아서 대기해야함',
          reviewCount: 1,
          postCount: 0,
          tagType: 'CUSTOM',
        },
      },
    ],
    reviewImageSet: [
      {
        id: 3,
        imageUrl:
          'https://hot6.s3.ap-northeast-2.amazonaws.com/public/review/ddc799acf009ea01606d00aed5f3d3f4.jpeg',
        imageOrder: 1,
      },
      {
        id: 3,
        imageUrl:
          'https://hot6.s3.ap-northeast-2.amazonaws.com/public/review/ddc799acf009ea01606d00aed5f3d3f4.jpeg',
        imageOrder: 1,
      },
      {
        id: 3,
        imageUrl:
          'https://hot6.s3.ap-northeast-2.amazonaws.com/public/review/ddc799acf009ea01606d00aed5f3d3f4.jpeg',
        imageOrder: 1,
      },
    ],
    user: {
      id: 1,
      email: 'test@email.com',
      name: '포톡스',
      status: 'ACTIVE',
      userRole: 'USER',
      userProvider: null,
      providerId: null,
    },
  };
  return <ReviewSummary {...data} />;
};

export default StorageScreen;
