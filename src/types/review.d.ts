import {FormImage} from '.';

export interface ReviewUpdateRequest {
  title: string;
  content: string;
  tagIdList: number[];
  newTagKeywordList: string[];
  starScore: number;
  deleteImageIdList: number[];
  reviewImageList: FormImage[];
}
