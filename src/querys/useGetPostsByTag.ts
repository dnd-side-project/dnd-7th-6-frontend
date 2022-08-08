import {AxiosError} from 'axios';
import {useQuery} from 'react-query';

import getPostsByTag from 'src/apis/getPostsByTag';
import {Recommendation} from 'src/types';

const useGetPostsByTag = (tagIdSet: number[]) => {
  return useQuery<Recommendation, AxiosError, Recommendation, [string, number[]]>(
    ['post', tagIdSet],
    ({queryKey}) => getPostsByTag(queryKey[1]),
  );
};

export default useGetPostsByTag;
