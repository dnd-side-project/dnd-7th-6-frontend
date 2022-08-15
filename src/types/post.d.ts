import {FormImage} from '.';

export interface PostCreateRequest {
  title: string;
  content: string;
  tagIdList: number[];
  postImageList: FormImage[];
}
