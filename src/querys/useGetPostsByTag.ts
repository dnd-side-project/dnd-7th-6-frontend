import {AxiosError} from 'axios';
import {useQuery} from 'react-query';

import getPostsByTag from 'src/apis/getPostsByTag';
import {Post, ServerResponse} from 'src/types';

const useGetPostsByTag = (tagIdSet: number[]) => {
  return useQuery<ServerResponse<Post>, AxiosError, ServerResponse<Post>, [string, number[]]>(
    ['post', tagIdSet],
    ({queryKey}) => getPostsByTag(queryKey[1]),
  );
};

export default useGetPostsByTag;
