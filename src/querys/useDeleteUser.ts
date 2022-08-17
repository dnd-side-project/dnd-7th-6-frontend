import {Alert} from 'react-native';
import {useMutation} from 'react-query';

import deleteUser from 'src/apis/deleteUser';

const useDeleteUser = () => {
  return useMutation(deleteUser, {
    onError: () => Alert.alert('회원 탈퇴에 문제가 발생하였습니다.'),
  });
};

export default useDeleteUser;
