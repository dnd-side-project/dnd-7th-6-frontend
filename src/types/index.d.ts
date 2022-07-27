export interface Post {
  id: number;
  title: string;
  content: string;
  likeCount: number;
  status: string;
  postTagSet: Tag[];
  postImageSet: PostImage[];
}

export interface Tag {
  id: 2;
  tag: string;
  reviewCount: number;
  postCount: number;
  isPhotoBooth: boolean;
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
