import {useMutation} from 'react-query';

import mutateReview from 'src/apis/mutateReview';
import {ReviewCreateRequest} from 'src/types/post';

const useMutateReview = () => {
  return useMutation((reviewCreateRequest: ReviewCreateRequest) =>
    mutateReview(reviewCreateRequest),
  );
};

export default useMutateReview;
