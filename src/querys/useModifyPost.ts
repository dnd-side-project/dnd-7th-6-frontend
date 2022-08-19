import {useMutation} from 'react-query';

import modifyPost from 'src/apis/modifyPost';
import {PostCreateRequest, PostModifyRequest} from 'src/types/post';

interface Parameter {
  postId: number;
  postCreateRequest: PostCreateRequest | PostModifyRequest;
}

const useModifyPost = () => {
  return useMutation(({postId, postCreateRequest}: Parameter) =>
    modifyPost(postId, postCreateRequest),
  );
};

export default useModifyPost;
