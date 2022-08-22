import {useMutation} from 'react-query';

import mutateReviewImageLike from 'src/apis/mutateReviewImageLike';

const useMutateReviewImageLike = () => {
  return useMutation((id: number) => mutateReviewImageLike(id));
};

export default useMutateReviewImageLike;
