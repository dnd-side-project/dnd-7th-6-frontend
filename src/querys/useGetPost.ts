import {AxiosError} from 'axios';
import {useQuery} from 'react-query';

import getPost from 'src/apis/getPost';
import {Post} from 'src/types';

const useGetPost = (id: number) => {
  return useQuery<Post, AxiosError, Post, [string, number]>(['post', id], ({queryKey}) =>
    getPost(queryKey[1]),
  );
};

export default useGetPost;
