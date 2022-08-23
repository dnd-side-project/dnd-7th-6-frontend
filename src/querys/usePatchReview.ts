import {Alert} from 'react-native';
import {useMutation} from 'react-query';

import patchReview from 'src/apis/patchReview';
import {ReviewUpdateRequest} from 'src/types/review';

interface Parameter {
  reviewId: number;
  reviewUpdateRequest: ReviewUpdateRequest;
}

const usePatchReview = () => {
  return useMutation(
    ({reviewId, reviewUpdateRequest}: Parameter) => patchReview(reviewId, reviewUpdateRequest),
    {
      onError: () => Alert.alert('닉네임을 수정하는데 문제가 발생하였습니다.'),
    },
  );
};

export default usePatchReview;
