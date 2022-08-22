import {useMutation} from 'react-query';

import patchPost from 'src/apis/patchPost';
import {PostUpdateRequest} from 'src/types/post';

interface Parameter {
  postId: number;
  postUpdateRequest: PostUpdateRequest;
}

const useModifyPost = () => {
  return useMutation(({postId, postUpdateRequest}: Parameter) =>
    patchPost(postId, postUpdateRequest),
  );
};

export default useModifyPost;
