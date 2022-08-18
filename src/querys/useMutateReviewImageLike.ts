import {useMutation} from 'react-query';

import mutatePostLike from 'src/apis/mutatePostLike';

const useMutateReviewImageLike = () => {
  return useMutation((id: number) => mutatePostLike(id));
};

export default useMutateReviewImageLike;
