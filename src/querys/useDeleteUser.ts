import {Alert} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage/';
import {useMutation} from 'react-query';
import {useDispatch} from 'react-redux';

import deleteUser from 'src/apis/deleteUser';
import {changeUserInfo, loginAction, setAccessToken} from 'src/redux/actions/UserAction';

const useDeleteUser = () => {
  const dispatch = useDispatch();
  return useMutation(deleteUser, {
    onError: () => Alert.alert('회원 탈퇴에 문제가 발생하였습니다.'),
    onSuccess: async () => {
      await EncryptedStorage.removeItem('refreshToken');

      dispatch(setAccessToken(''));
      dispatch(changeUserInfo({}));
      dispatch(loginAction(false));
    },
  });
};

export default useDeleteUser;
