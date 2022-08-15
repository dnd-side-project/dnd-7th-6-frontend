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
  numberOfElement: number;
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
  userProvider: null;
  providerId: null;
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
  likeCount: 0;
  status: string;
  starScore: number;
  createdAt: string;
  updatedAt: string;
  reviewTagSet: Array<{tag: Tag}>;
  reviewImageSet: Array<PostImage>;
  user: User;
}
