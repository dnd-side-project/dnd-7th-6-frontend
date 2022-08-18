export interface PostTag {
  tag: {
    id: number;
    title: string;
    reviewCount: number;
    postCount: number;
    tagType: string;
  };
}

export interface Post {
  id: number;
  title: string;
  content: string;
  likeCount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  postTagSet: PostTag[];
  postImageSet: PostImage[];
  user: User;
  like: boolean;
}

export interface Recommendation {
  content: Post[];
  totalPages: number;
  numberOfElement: number;
  size: number;
  number: number;
  sort: any;
}

export interface ServerResponse<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  size: number;
  number: number;
  sort: any;
}

export interface ReviewImage {
  id: number;
  imageUrl: string;
  imageOrder: number;
  like: boolean;
}

export interface Tag {
  id: number;
  title: string;
  keyword: string;
  photoBoothCount: number;
  reviewCount: number;
  postCount: number;
  tagType: string;
  tagIconImageUrl: string;
}

export interface PostImage {
  id: number;
  imageUrl: string;
  imageOrder: number;
}

export interface User {
  id: number;
  email: string;
  name: string;
  status: string;
  userRole: string;
  provider: 'NAVER' | 'KAKAO' | 'GOOGLE' | 'APPLE';
  providerId: string;
}

export interface BoothSummary {
  title: string;
  distance: string;
  review: number;
  tags: string[];
  images: string[];
}

export interface SearchLocation {
  documents: SearchLocationDatas[];
}

export interface SearchLocationDatas {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

export interface PhotoBooth {
  id: number;
  jibunAddress: string;
  latitude: number;
  likeCount: number;
  longitude: number;
  reviewCount: number;
  starCount: number | null;
  name: string;
  roadAddress: string;
  status: string;
}

export interface PhotoBoothResponse {
  photoBooth: PhotoBooth;
  like: boolean;
  distance?: number;
  reviewImageList: string[];
  tagSummary: {
    BOOTH_CONDITION: {tag: Tag; reviewCount: number}[];
    PHOTO_CONDITION: {tag: Tag; reviewCount: number}[];
  };
}

export interface PhotoBoothContentData {
  distance: number;
  firstReview: null;
  like: boolean;
  photoBooth: PhotoBooth;
  tagSet: null;
}

export interface PhotoBoothBrandTag {
  id: number;
  title: string;
  keyword: string;
  photoBoothCount: number;
  reviewCount: number;
  postCount: number;
  tagType: string;
}

export interface Review {
  id: number;
  title: string;
  content: string;
  starScore: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  reviewTagSet: Array<{tag: Tag}>;
  reviewImageSet: Array<ReviewImage>;
  user: User;
}

export interface FormImage {
  uri: string;
  type: string;
  name: string | undefined;
}

export interface UserLike {
  imageList: UserLikeImage[];
  photoBoothList: UserLikeBooth[];
}

export interface UserLikeImage {
  id: 3;
  type: 'REVIEW' | 'POST';
  imageUrl: string;
  createdAt: string;
  like: true;
}

export interface UserLikeBooth {
  id: number;
  name: string;
  jibunAddress: string;
  roadAddress: string;
  latitude: number;
  longitude: number;
  likeCount: number;
  reviewCount: number;
  starScore: number;
  status: string;
  imageUrl: string;
  createdAt: string;
  like: true;
}

export interface UserList {
  reviewList: Review[];
  postList: Post[];
}
