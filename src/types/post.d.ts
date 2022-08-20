import {FormImage} from '.';

export interface PostCreateRequest {
  title: string;
  content: string;
  tagIdList: number[];
  isPublic: boolean;
  newTagList: string[];
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
