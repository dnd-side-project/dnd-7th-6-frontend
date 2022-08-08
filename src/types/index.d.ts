export interface Post {
  id: number;
  title: string;
  content: string;
  likeCount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  postTagSet: Tag[];
  postImageSet: PostImage[];
  user: User;
}

export interface Tag {
  tag: {
    id: 2;
    title: string;
    reviewCount: number;
    postCount: number;
    isPhotoBooth: boolean;
  };
}

export interface PostImage {
  id: number;
  imageUrl: string;
  imageOrder: number;
}

export interface User {
  email: string;
  upwd: string;
  status: string;
  userRole: string;
  userProvider?: string;
  providerId?: string;
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

export interface PhotoBoothContentData {
  firstReview: null;
  like: boolean;
  photoBooth: {
    id: number;
    jibunAddress: string;
    latitude: number;
    likeCount: number;
    longitude: number;
    name: string;
    roadAddress: string;
    status: string;
  };
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
