import {FormImage} from '.';

export interface PostCreateRequest {
  title: string;
  content: string;
  tagIdList: number[];
  isPublic: boolean;
  newTagList: string[];
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
