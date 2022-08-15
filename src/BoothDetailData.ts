import {PhotoBoothResponse} from './types';

const BoothDetailData: PhotoBoothResponse = {
  photoBooth: {
    id: 1,
    name: '우리집',
    jibunAddress: 'jibun',
    roadAddress: 'road',
    latitude: 37.4956,
    longitude: 127.0207,
    likeCount: 0,
    status: 'ACTIVE',
  },
  firstReview: {
    id: 2,
    title: 'test22',
    content: 'test입니다',
    starScore: 3.5,
    likeCount: 0,
    status: 'ACTIVE',
    createdAt: '2022-07-31T23:36:02',
    updatedAt: '2022-07-31T23:36:02',
    reviewTagSet: [
      {
        tag: {
          id: 1,
          title: 'tag1',
          reviewCount: 1,
          postCount: 0,
          tagType: 'PHOTO_BOOTH',
          keyword: 'tag1',
          photoBoothCount: 10,
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
  },
  tagSet: [
    {
      id: 1,
      title: 'tag1',
      reviewCount: 1,
      postCount: 0,
      tagType: 'PHOTO_BOOTH',
      keyword: 'tag1',
      photoBoothCount: 10,
    },
    {
      id: 2,
      title: 'tag2',
      reviewCount: 1,
      postCount: 0,
      tagType: 'PHOTO_BOOTH',
      keyword: 'tag1',
      photoBoothCount: 10,
    },
  ],
  like: true,
};

export default BoothDetailData;
