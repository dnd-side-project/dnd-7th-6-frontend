import {FormImage} from '.';

export interface PostCreateRequest {
  title: string;
  content: string;
  tagIdList: number[];
  isPublic: boolean;
  newTagList: string[];
  postImageList: FormImage[];
}

export interface PostModifyRequest {
  title: string;
  content: string;
  tagIdList: number[];
  isPublic: boolean;
  newTagList: string[];
  deleteImageList: number[];
  postImageList: FormImage[];
}
