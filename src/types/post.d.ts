import {FormImage} from '.';

export interface PostCreateRequest {
  title: string;
  content: string;
  tagIdList: number[];
  isPublic: boolean;
  newTagKeywordList: string[];
  postImageList: FormImage[];
}

export interface PostUpdateRequest {
  title: string;
  content: string;
  tagIdList: number[];
  isPublic: boolean;
  newTagKeywordList: string[];
  deleteImageIdList: number[];
  postImageList: FormImage[];
}

export interface ReviewCreateRequest {
  title: string;
  content: string;
  tagIdList: number[];
  photoBoothId: number;
  userId: number;
  starScore: number;
  postImageList: FormImage[];
}
