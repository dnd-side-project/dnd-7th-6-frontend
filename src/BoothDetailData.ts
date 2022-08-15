import {PhotoBoothResponse} from './types';

const BoothDetailData: PhotoBoothResponse = {
  photoBooth: {
    id: 109,
    name: '포토매틱 홍대점',
    jibunAddress: '서울 마포구 동교동 154-8',
    roadAddress: '서울 마포구 월드컵북로2길 93',
    latitude: 37.5587653056704,
    longitude: 126.924815609701,
    likeCount: 0,
    reviewCount: 3,
    starCount: null,
    status: 'ACTIVE',
  },
  distance: 4.386480056502315,
  reviewImageList: [
    'https://hot6.s3.ap-northeast-2.amazonaws.com/public/review/a07d816b61f80b31412950350919294b.png',
    'https://hot6.s3.ap-northeast-2.amazonaws.com/public/review/94690e6545cee8f1c776a5dacb4a570e.png',
    'https://hot6.s3.ap-northeast-2.amazonaws.com/public/review/68a85f4e69190cf5b8607e8f0532b53a.png',
  ],
  tagSummary: {
    BOOTH_CONDITION: [
      {
        tag: {
          id: 1,
          title: '소품 상태가 깔끔해요',
          keyword: '깔끔한 소품',
          photoBoothCount: 2,
          reviewCount: 3,
          postCount: 5,
          tagIconImageUrl:
            'https://hot6.s3.ap-northeast-2.amazonaws.com/public/tag/Booth_01_Clean.png',
          tagType: 'BOOTH_CONDITION',
        },
        reviewCount: 3,
      },
      {
        tag: {
          id: 2,
          title: '파우더룸이 잘 되어있어요',
          keyword: '파우더룸',
          photoBoothCount: 1,
          reviewCount: 4,
          postCount: 4,
          tagIconImageUrl:
            'https://hot6.s3.ap-northeast-2.amazonaws.com/public/tag/Booth_09_Powder_Room.png',
          tagType: 'BOOTH_CONDITION',
        },
        reviewCount: 3,
      },
      {
        tag: {
          id: 10,
          title: '배경색이 다양해요',
          keyword: '배경색이 다양해요',
          photoBoothCount: 1,
          reviewCount: 3,
          postCount: 0,
          tagIconImageUrl:
            'https://hot6.s3.ap-northeast-2.amazonaws.com/public/tag/Booth_05_BG_Color.png',
          tagType: 'BOOTH_CONDITION',
        },
        reviewCount: 3,
      },
      {
        tag: {
          id: 3,
          title: '부스 공간이 넓어요',
          keyword: '넓은 촬영공간',
          photoBoothCount: 1,
          reviewCount: 2,
          postCount: 0,
          tagIconImageUrl:
            'https://hot6.s3.ap-northeast-2.amazonaws.com/public/tag/Booth_04_Booth_Space.png',
          tagType: 'BOOTH_CONDITION',
        },
        reviewCount: 2,
      },
      {
        tag: {
          id: 4,
          title: '부스가 청결해요',
          keyword: '깔끔한 부스',
          photoBoothCount: 1,
          reviewCount: 2,
          postCount: 0,
          tagIconImageUrl:
            'https://hot6.s3.ap-northeast-2.amazonaws.com/public/tag/Booth_01_Clean.png',
          tagType: 'BOOTH_CONDITION',
        },
        reviewCount: 2,
      },
    ],
    PHOTO_CONDITION: [
      {
        tag: {
          id: 11,
          title: '화질이 선명해요',
          keyword: '선명한 화질',
          photoBoothCount: 1,
          reviewCount: 3,
          postCount: 0,
          tagIconImageUrl:
            'https://hot6.s3.ap-northeast-2.amazonaws.com/public/tag/Photo_01_Picture_Quality.png',
          tagType: 'PHOTO_CONDITION',
        },
        reviewCount: 3,
      },
      {
        tag: {
          id: 12,
          title: '보정이 자연스러워요',
          keyword: '자연스러운 보정',
          photoBoothCount: 1,
          reviewCount: 2,
          postCount: 0,
          tagIconImageUrl:
            'https://hot6.s3.ap-northeast-2.amazonaws.com/public/tag/Photo_02_Retouching.png',
          tagType: 'PHOTO_CONDITION',
        },
        reviewCount: 2,
      },
      {
        tag: {
          id: 13,
          title: '생각보다 하얗게 나와요',
          keyword: '생각보다 하얗게 나와요',
          photoBoothCount: 1,
          reviewCount: 2,
          postCount: 0,
          tagIconImageUrl:
            'https://hot6.s3.ap-northeast-2.amazonaws.com/public/tag/Photo_05_White.png',
          tagType: 'PHOTO_CONDITION',
        },
        reviewCount: 2,
      },
    ],
  },
  like: false,
};

export default BoothDetailData;
