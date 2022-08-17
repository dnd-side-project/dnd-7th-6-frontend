import {useMutation} from 'react-query';

import mutatePost from 'src/apis/mutatePost';
import {PostCreateRequest} from 'src/types/post';

const useMutatePost = () => {
  return useMutation((postCreateRequest: PostCreateRequest) => mutatePost(postCreateRequest));
};

export default useMutatePost;
