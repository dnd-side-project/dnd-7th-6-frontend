import {useMutation} from 'react-query';

import modifyPost from 'src/apis/modifyPost';
import {PostUpdateRequest} from 'src/types/post';

interface Parameter {
  postId: number;
  postUpdateRequest: PostUpdateRequest;
}

const useModifyPost = () => {
  return useMutation(({postId, postUpdateRequest}: Parameter) =>
    modifyPost(postId, postUpdateRequest),
  );
};

export default useModifyPost;
