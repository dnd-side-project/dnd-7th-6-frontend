import {Alert} from 'react-native';
import {useMutation} from 'react-query';

import deleteReview from 'src/apis/deleteReview';

const useDeleteReview = () => {
  return useMutation(deleteReview, {
    onError: () => Alert.alert('리뷰 삭제에 문제가 발생하였습니다.'),
  });
};

export default useDeleteReview;
