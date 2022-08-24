import {Alert} from 'react-native';
import {useMutation} from 'react-query';

import deletePost from 'src/apis/deletePost';

const useDeletePost = () => {
  return useMutation(deletePost, {
    onError: () => Alert.alert('글 삭제에 문제가 발생하였습니다.'),
  });
};

export default useDeletePost;
