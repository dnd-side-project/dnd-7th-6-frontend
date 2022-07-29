import {useQuery} from 'react-query';

import getPost from 'src/apis/getPost';
import {Post} from 'src/types';

const postInitialData = {
  id: 0,
  likeCount: 0,
  postImageSet: [],
  status: '',
  content: '',
  createdAt: '',
  updatedAt: '',
  postTagSet: [],
  title: '',
  user: {
    email: '',
    status: '',
    upwd: '',
    userRole: '',
  },
};

const useGetPost = (id: number) => {
  return useQuery<Post>(['post', id], getPost, {
    initialData: postInitialData,
  });
};

export default useGetPost;
