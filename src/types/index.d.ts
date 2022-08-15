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

export interface Tag {
  id: number;
  title: string;
  keyword: string;
  photoBoothCount: number;
  reviewCount: number;
  postCount: number;
  tagType: string;
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

export interface PhotoBoothContentData {
  distance: number;
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

export interface FormImage {
  uri: string;
  type: string;
  name: string | undefined;
}
