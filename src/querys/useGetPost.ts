import {useQuery} from 'react-query';

import getPost from 'src/apis/getPost';
import {Post} from 'src/types';

const useGetPost = (id: number) => {
  return useQuery<Post>(['post', id], getPost);
};

export default useGetPost;
